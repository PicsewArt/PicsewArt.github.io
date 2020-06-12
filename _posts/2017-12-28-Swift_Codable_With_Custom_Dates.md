---
title: "Swift: Codable With Custom Dates"
category: "Swift"
quote: false
tags: [iOS, Swift, Codable]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0019.jpg'
---
How do you decode a JSON feed that has several custom date formats? If you are lucky using a `dateDecodingStrategy` might be enough. Unfortunately it has limited support for the `.iso8601` format and you can only set one strategy at a time so it does not help when you have two or more different date formats.

## An Example From The iTunes RSS Generator

I am using the [iTunes RSS Feed Generator](https://rss.itunes.apple.com/en-us) as an example. Here is what the JSON looks like for the top 3 UK podcasts, omitting many fields for brevity, written using the Swift 4 multi-line string syntax:

```json
// https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/3/explicit.json
let json = """
{
  "feed": {
    "title":"Top Audio Podcasts",
    "country":"gb",
    "updated":"2017-11-16T02:02:55.000-08:00",
    "results":[
      {
      "artistName":"BBC Radio",
      "name":"Blue Planet II: The Podcast",
      "releaseDate":"2017-11-12",
      "url":"https://itunes.apple.com/gb/podcast/blue-planet-ii-the-podcast/id1296222557?mt=2"
    },
    {
      "artistName":"Audible",
      "name":"The Butterfly Effect with Jon Ronson",
      "releaseDate":"2017-11-03",
      "url":"https://itunes.apple.com/gb/podcast/the-butterfly-effect-with-jon-ronson/id1258779354?mt=2"
    },
    {
      "artistName":"TED",
      "name":"TED Talks Daily",
      "releaseDate":"2017-11-16",
      "url":"https://itunes.apple.com/gb/podcast/ted-talks-daily/id160904630?mt=2"
    }
    ]
  }
}
"""
```

Note that there are two different date formats in use. The first is the timestamp for when the chart was last updated. This is an `iso8601 `format (but note the fractional seconds):

```json
"updated":"2017-11-16T02:02:55.000-08:00",
```

The second is the podcast release date and is a simple `yyyy-MM-dd` format:

```json
"releaseDate":"2017-11-12",
```

## Swift Codable - A Recap

Swift 4 brought us a standardized way to encode/decode JSON using our own custom types by adopting the `Codable` protocol. Standard types like String, `URL` and `Date` are already `Codable` so we can use them to build `Codable` types for the podcast and feed. We can also nest Swift structs to directly model the RSS Feed structure:

```swift
import Foundation

struct RSSFeed: Codable {
  struct Feed: Codable {
    struct Podcast: Codable {
      let name: String
      let artistName: String
      let url: URL
      let releaseDate: Date
    }

    let title: String
    let country: String
    let updated: Date
    let podcasts: [Podcast]

    private enum CodingKeys: String, CodingKey {
      case title
      case country
      case updated
      case podcasts = "results"
    }
  }

  let feed: Feed
}

typealias Feed = RSSFeed.Feed
typealias Podcast = Feed.Podcast
```

Note: I am switching the name of the generic `“results”` field to `“podcasts”` by providing a `CodingKeys` enum with the alternate key name in the `Feed` struct.

To decode our JSON string we convert it to `Data` and feed it to a `JSONDecoder`:

```swift
let data = Data(json.utf8)
let decoder = JSONDecoder()
let rssFeed = try! decoder.decode(RSSFeed.self, from: data)
```

Unfortunately this gives us decoding errors for the two dates.

## Date Decoding Strategy

You can change the way the JSON decoder handles dates by setting the date decoding strategy. The `updated` date for the `Feed` looks a lot like an `iso8601` date which is one of the supported strategies so we could try that:

```swift
let decoder = JSONDecoder()
decoder.dateDecodingStrategy = .iso8601
```

Unfortunately it still does not work as it seems the `Foundation` library does not support `iso8601` times that include fractional seconds (`02:55.000`). Luckily it is no big deal to use a custom date formatter that does handle the full `iso8601` format (see also this Stack Overflow answer):

```swift
extension DateFormatter {
  static let iso8601Full: DateFormatter = {
    let formatter = DateFormatter()
    formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ"
    formatter.calendar = Calendar(identifier: .iso8601)
    formatter.timeZone = TimeZone(secondsFromGMT: 0)
    formatter.locale = Locale(identifier: "en_US_POSIX")
    return formatter
  }()
}
```

Note the `.SSS` in the date format. To use this custom data formatter when decoding our JSON data:

```swift
let data = Data(json.utf8)
let decoder = JSONDecoder()
decoder.dateDecodingStrategy = .formatted(DateFormatter.iso8601Full)
let rssFeed = try! decoder.decode(RSSFeed.self, from: data)
```

This gets us closer but we also need to handle the custom `releaseDate` date format.

## Custom Transformation

Using the `dateDecodingStrategy` works well when your feed has one custom date format. Let’s see how to manually decode the `Podcast` type so we can also handle the custom `releaseDate` format. First we need a date formatter to handle the `yyyy-MM-dd` format of the `releaseDate`:

```swift
extension DateFormatter {
  static let yyyyMMdd: DateFormatter = {
    let formatter = DateFormatter()
    formatter.dateFormat = "yyyy-MM-dd"
    formatter.calendar = Calendar(identifier: .iso8601)
    formatter.timeZone = TimeZone(secondsFromGMT: 0)
    formatter.locale = Locale(identifier: "en_US_POSIX")
    return formatter
  }()
}
```

Now we can extend the `Podcast` type with our own required initializer `init(from: Decoder)` that handles the custom date format:

```swift
extension Podcast {
  init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    name = try container.decode(String.self, forKey: .name)
    artistName = try container.decode(String.self, forKey: .artistName)
    url = try container.decode(URL.self, forKey: .url)

    let dateString = try container.decode(String.self, forKey: .releaseDate)
    let formatter = DateFormatter.yyyyMMdd
    if let date = formatter.date(from: dateString) {
        releaseDate = date
    } else {
        throw DecodingError.dataCorruptedError(forKey: .releaseDate,
              in: container,
              debugDescription: "Date string does not match format expected by formatter.")
    }
  }
}
```

This is boilerplate code to decode a keyed container (a dictionary) using the `CodingKeys` enum that has keys for each member of the `Podcast` struct. To handle the custom date we first try to decode the `.releaseDate` field to a String and then use our data formatter to parse it into a `Date`. If we do not get a valid `Date` back from the formatter we throw a `.dataCorruptedError`.

We should now be able to decode the full feed:

```swift
let data = Data(json.utf8)
let decoder = JSONDecoder()
decoder.dateDecodingStrategy = .formatted(DateFormatter.iso8601Full)
let rssFeed = try! decoder.decode(RSSFeed.self, from: data)

let feed = rssFeed.feed
print(feed.title, feed.country, feed.updated)

feed.podcasts.forEach {
  print($0.name)
}
```

```console
Top Audio Podcasts gb 2017-11-16 10:02:55 +0000
Blue Planet II: The Podcast
The Butterfly Effect with Jon Ronson
TED Talks Daily
```
