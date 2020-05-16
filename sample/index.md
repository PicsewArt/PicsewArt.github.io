---
layout: post
title: "Sample"
date: "2020-05-06"
hero:
  format: 'jpeg'
  url: 'HERO_TECH_H_0004.jpg'
has_about: true
show_hero: true
post_has_front_header: true
---
# Titles

<blockquote>
  <h1 toc-skip="true" id="h1">H1</h1>
  <h2 toc-skip="true" id="h2">H2</h2>
  <h3 toc-skip="true" id="h3">H3</h3>
  <h4 toc-skip="true" id="h4">H4</h4>
  <h5 toc-skip="true" id="h5">H5</h5>
  <h6 toc-skip="true" id="h6">H6</h6>
</blockquote>

# Blockquote

<blockquote class="layer">
  <blockquote>
    <p>Blockquote:</p>
    <p>Dolore quam distinctio eos cupiditate.</p>
    <p>Dolor rerum ut itaque quia et in. Dolor hic quod voluptatibus incidunt sed officiis maiores.</p>
  </blockquote>
</blockquote>

# Normal Contents

> Normal Content

# Bold Contents

> **Bold Content**

# Italic Contents

> *Italic Content*

# Links

> [Normal Link](https://baidu.com/)

> {% include link.html href='https://baidu.com/' title='External Link' %}

# Buttons

## Link Buttons

> {% include button.html title='Button' href=site.url %}
>
> {% include button.html title='Show More' href=site.url %}

## Round Buttons

### Inline Buttons

<blockquote>This is a {% include button_round.html title='Text only button' href=site.url %} here.
<br />
And this is a {% include button_round.html title='Download' href=site.url svg=site.data.svgs.download %} button.</blockquote>

### Row Buttons

<blockquote>{% assign buttons_svgs = site.data.svgs.github | append: ',' | append: site.data.svgs.search | append: ',' | append: site.data.svgs.search %}{% include button_round_row.html titles='Github Button,Google Button,Yandex Button' hrefs='https://github.com/,https://google.com/,https://yandex.com/' svgs=buttons_svgs %}</blockquote>

### Animated Buttons

<blockquote>{% include button_animated.html title='Learn More' href=site.url %}</blockquote>

# Keyboard

> <kbd>Keyboard</kbd>
>
> Please press <kbd data-key="lcmd"></kbd> + <kbd>D</kbd> to save this page.
>
> Please press <kbd data-key="lctrl"></kbd> + <kbd>C</kbd> to copy.

{% include keyboard.html %}

# Codes

## Markdown

> `Inline Code`

> ```html
> <!-- Code Block -->
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8">
> 		<title></title>
> 	</head>
> 	<body>
> 		<!-- SOMETHING -->
> 	</body>
> </html>
> ```

## Liquid

<blockquote>
{% highlight java %}
class Untitled {
	public static void main(String[] args) {
    // SOMETHING
	}
}
{% endhighlight %}
</blockquote>

{% include alert_detail_start.html type="info" title='List' msg='Languages supported in rouge' %}
<table>
<tr><th>Language</th><th>Indicator</th></tr>
<tr><td>Abap</td><td><code>abap</code></td></tr>
<tr><td>ActionScript</td><td><code>actionscript</code></td></tr>
<tr><td>Apache</td><td><code>apache</code></td></tr>
<tr><td>API Blueprint</td><td><code>apiblueprint</code></td></tr>
<tr><td>AppleScript</td><td><code>applescript</code></td></tr>
<tr><td>Awk</td><td><code>awk</code></td></tr>
<tr><td>Aiml</td><td><code>biml</code></td></tr>
<tr><td>Brainfuck</td><td><code>brainfuck</code></td></tr>
<tr><td>BSL</td><td><code>bsl</code></td></tr>
<tr><td>C</td><td><code>c</code></td></tr>
<tr><td>Ceylon</td><td><code>ceylon</code></td></tr>
<tr><td>CfScript</td><td><code>cfscript</code></td></tr>
<tr><td>Clojure</td><td><code>clojure</code></td></tr>
<tr><td>Cmake</td><td><code>cmake</code></td></tr>
<tr><td>CoffeeScript</td><td><code>coffeescript</code></td></tr>
<tr><td>Common Lisp</td><td><code>common_lisp</code></td></tr>
<tr><td>Conf</td><td><code>conf</code></td></tr>
<tr><td>Console</td><td><code>console</code></td></tr>
<tr><td>Coq</td><td><code>coq</code></td></tr>
<tr><td>Cpp</td><td><code>cpp</code></td></tr>
<tr><td>Crystal</td><td><code>crystal</code></td></tr>
<tr><td>Csharp</td><td><code>csharp</code></td></tr>
<tr><td>Css</td><td><code>css</code></td></tr>
<tr><td>D</td><td><code>d</code></td></tr>
<tr><td>Dart</td><td><code>dart</code></td></tr>
<tr><td>Diff</td><td><code>diff</code></td></tr>
<tr><td>Digdag</td><td><code>digdag</code></td></tr>
<tr><td>Docker</td><td><code>docker</code></td></tr>
<tr><td>Dot</td><td><code>dot</code></td></tr>
<tr><td>Eiffel</td><td><code>eiffel</code></td></tr>
<tr><td>Elixir</td><td><code>elixir</code></td></tr>
<tr><td>Elm</td><td><code>elm</code></td></tr>
<tr><td>Erb</td><td><code>erb</code></td></tr>
<tr><td>Erlang</td><td><code>erlang</code></td></tr>
<tr><td>Escape</td><td><code>escape</code></td></tr>
<tr><td>Factor</td><td><code>factor</code></td></tr>
<tr><td>Fortran</td><td><code>fortran</code></td></tr>
<tr><td>Fsharp</td><td><code>fsharp</code></td></tr>
<tr><td>Gherkin</td><td><code>gherkin</code></td></tr>
<tr><td>Glsl</td><td><code>glsl</code></td></tr>
<tr><td>Go</td><td><code>go</code></td></tr>
<tr><td>Gradle</td><td><code>gradle</code></td></tr>
<tr><td>Graphql</td><td><code>graphql</code></td></tr>
<tr><td>Groovy</td><td><code>groovy</code></td></tr>
<tr><td>Hack</td><td><code>hack</code></td></tr>
<tr><td>Haml</td><td><code>haml</code></td></tr>
<tr><td>Handlebars</td><td><code>handlebars</code></td></tr>
<tr><td>Haskell</td><td><code>haskell</code></td></tr>
<tr><td>Hcl</td><td><code>hcl</code></td></tr>
<tr><td>HTML</td><td><code>html</code></td></tr>
<tr><td>HTTP</td><td><code>http</code></td></tr>
<tr><td>Hylang</td><td><code>hylang</code></td></tr>
<tr><td>Idlang</td><td><code>idlang</code></td></tr>
<tr><td>Igorpro</td><td><code>igorpro</code></td></tr>
<tr><td>Ini</td><td><code>ini</code></td></tr>
<tr><td>Io</td><td><code>io</code></td></tr>
<tr><td>Irb</td><td><code>irb</code></td></tr>
<tr><td>Java</td><td><code>java</code></td></tr>
<tr><td>JavaScript</td><td><code>javascript</code></td></tr>
<tr><td>Jinja</td><td><code>jinja</code></td></tr>
<tr><td>Json</td><td><code>json</code></td></tr>
<tr><td>Json Doc</td><td><code>json-doc</code></td></tr>
<tr><td>Jsonnet</td><td><code>jsonnet</code></td></tr>
<tr><td>Jsp</td><td><code>jsp</code></td></tr>
<tr><td>Jsx</td><td><code>jsx</code></td></tr>
<tr><td>Julia</td><td><code>julia</code></td></tr>
<tr><td>Kotlin</td><td><code>kotlin</code></td></tr>
<tr><td>Lasso</td><td><code>lasso</code></td></tr>
<tr><td>Liquid</td><td><code>liquid</code></td></tr>
<tr><td>Literate CoffeeScript</td><td><code>literate_coffeescript</code></td></tr>
<tr><td>Literate Haskell</td><td><code>literate_haskell</code></td></tr>
<tr><td>LLVM</td><td><code>llvm</code></td></tr>
<tr><td>Lua</td><td><code>lua</code></td></tr>
<tr><td>M</td><td><code>m</code></td></tr>
<tr><td>Magik</td><td><code>magik</code></td></tr>
<tr><td>Make</td><td><code>make</code></td></tr>
<tr><td>Markdown</td><td><code>markdown</code></td></tr>
<tr><td>Mathematica</td><td><code>mathematica</code></td></tr>
<tr><td>Matlab</td><td><code>matlab</code></td></tr>
<tr><td>Moonscript</td><td><code>moonscript</code></td></tr>
<tr><td>Mosel</td><td><code>mosel</code></td></tr>
<tr><td>Mxml</td><td><code>mxml</code></td></tr>
<tr><td>Nasm</td><td><code>nasm</code></td></tr>
<tr><td>Nginx</td><td><code>nginx</code></td></tr>
<tr><td>Nim</td><td><code>nim</code></td></tr>
<tr><td>Nix</td><td><code>nix</code></td></tr>
<tr><td>Objective C/Objective C++</td><td><code>objective_c</code></td></tr>
<tr><td>Ocaml</td><td><code>ocaml</code></td></tr>
<tr><td>Pascal</td><td><code>pascal</code></td></tr>
<tr><td>Perl</td><td><code>perl</code></td></tr>
<tr><td>Php</td><td><code>php</code></td></tr>
<tr><td>Plain Text</td><td><code>plaintext</code></td></tr>
<tr><td>Plist</td><td><code>plist</code></td></tr>
<tr><td>PowerShell</td><td><code>powershell</code></td></tr>
<tr><td>Praat</td><td><code>praat</code></td></tr>
<tr><td>Prolog</td><td><code>prolog</code></td></tr>
<tr><td>Prometheus</td><td><code>prometheus</code></td></tr>
<tr><td>Properties</td><td><code>properties</code></td></tr>
<tr><td>Protobuf</td><td><code>protobuf</code></td></tr>
<tr><td>Puppet</td><td><code>puppet</code></td></tr>
<tr><td>Python</td><td><code>python</code></td></tr>
<tr><td>Q</td><td><code>q</code></td></tr>
<tr><td>Qml</td><td><code>qml</code></td></tr>
<tr><td>R</td><td><code>r</code></td></tr>
<tr><td>Racket</td><td><code>racket</code></td></tr>
<tr><td>Ruby</td><td><code>ruby</code></td></tr>
<tr><td>Rust</td><td><code>rust</code></td></tr>
<tr><td>Sass</td><td><code>sass</code></td></tr>
<tr><td>Scala</td><td><code>scala</code></td></tr>
<tr><td>Scheme</td><td><code>scheme</code></td></tr>
<tr><td>Scss</td><td><code>scss</code></td></tr>
<tr><td>Sed</td><td><code>sed</code></td></tr>
<tr><td>Shell</td><td><code>shell</code></td></tr>
<tr><td>Sieve</td><td><code>sieve</code></td></tr>
<tr><td>Slim</td><td><code>slim</code></td></tr>
<tr><td>Smalltalk</td><td><code>smalltalk</code></td></tr>
<tr><td>Smarty</td><td><code>smarty</code></td></tr>
<tr><td>Sml</td><td><code>sml</code></td></tr>
<tr><td>Sqf</td><td><code>sqf</code></td></tr>
<tr><td>SQL</td><td><code>sql</code></td></tr>
<tr><td>Supercollider</td><td><code>supercollider</code></td></tr>
<tr><td>Swift</td><td><code>swift</code></td></tr>
<tr><td>Tap</td><td><code>tap</code></td></tr>
<tr><td>Tcl</td><td><code>tcl</code></td></tr>
<tr><td>Terraform</td><td><code>terraform</code></td></tr>
<tr><td>Tex</td><td><code>tex</code></td></tr>
<tr><td>Toml</td><td><code>toml</code></td></tr>
<tr><td>Tsx</td><td><code>tsx</code></td></tr>
<tr><td>Tulip</td><td><code>tulip</code></td></tr>
<tr><td>Turtle</td><td><code>turtle</code></td></tr>
<tr><td>Twig</td><td><code>twig</code></td></tr>
<tr><td>Typescript</td><td><code>typescript</code></td></tr>
<tr><td>Vala</td><td><code>vala</code></td></tr>
<tr><td>VB</td><td><code>vb</code></td></tr>
<tr><td>Verilog</td><td><code>verilog</code></td></tr>
<tr><td>VHDL</td><td><code>vhdl</code></td></tr>
<tr><td>Viml</td><td><code>viml</code></td></tr>
<tr><td>Vue</td><td><code>vue</code></td></tr>
<tr><td>Wollok</td><td><code>wollok</code></td></tr>
<tr><td>XML</td><td><code>xml</code></td></tr>
<tr><td>Xojo</td><td><code>xojo</code></td></tr>
<tr><td>YAML</td><td><code>yaml</code></td></tr>
</table>
{% include alert_detail_end.html %}

# Tables

> |Left|Right|
> |:-:|:-:|
> |0|1|
> |2|3|

# Lines

> ***

# Images

## Normal Image

> ![Normal Image]({{ site.url }}/assets/images/avatar.jpg)

## Grid Images

{% assign grid_images = '/assets/images/hero/low/HERO_TECH_H_0014.jpg,/assets/images/hero/low/HERO_TECH_H_0013.jpg,/assets/images/hero/low/HERO_TECH_H_0012.jpg, /assets/images/hero/low/HERO_TECH_H_0011.jpg, /assets/images/hero/low/HERO_TECH_H_0010.jpg, /assets/images/hero/low/HERO_TECH_H_0009.jpg' %}
<blockquote>{% include image_grid.html cols=2 images=grid_images %}</blockquote>

<blockquote>{% include image_grid.html cols=3 images=grid_images %}</blockquote>

## Framed Image

<blockquote>{% include image_frame.html image='https://dribbble.s3.amazonaws.com/users/322/screenshots/872485/coldchase.jpg' %}</blockquote>

## Unsplash Image

<blockquote>{% include unsplash.html id='GNNZ2KuYz2o' %}</blockquote>

## Overlay Images

### Overlay Normal Image

<blockquote>{% include image_overlay.html image='/assets/images/hero/low/HERO_PAINTINGS_V_0000.jpg' title=site.name desc=site.description link=site.url maxwidth="200px" %}</blockquote>

### Overlay Unsplash Image

<blockquote>{% include image_overlay.html unsplash='ydU5iN4mWek' title='Unsplash' desc='Woods in Wassergspreng, Austria.' fadein='bottom' maxwidth="300px" %}</blockquote>

### Boxed Overlay Image

<blockquote>{% include image_overlay_box.html title="Sadness" subtitle="is killing me" desc="Still be suffering is stupid." image="/assets/images/hero/low/HERO_SADNESS_H_0005.jpg" %}</blockquote>

### Fashion Overlay Image

<blockquote>{% include image_overlay_fashion.html title="The" subtitle="Sadness" desc="is killing me." image="/assets/images/hero/low/HERO_PAINTINGS_V_0001.jpg" href=site.url %}</blockquote>

### Black-White Rectangle Overlay Image

<blockquote>{% include image_overlay_bw_rect.html title="The<br/>Sadness" hover="Read More" image="/assets/images/hero/low/HERO_PAINTINGS_H_0001.jpg" href=site.url %}</blockquote>

## Lined Overlay Image

<blockquote>{% include image_overlay_lines.html title="The Sadness" subtitle="is killing me" desc="Still be suffering is stupid." image="/assets/images/hero/low/HERO_SADNESS_H_0006.jpg" href=site.url %}</blockquote>

## Listing Overlay Image

<blockquote>{% include image_overlay_listing.html title="The Sadness is killing me" image="/assets/images/hero/low/HERO_SADNESS_H_0007.jpg" href=site.url items="Vintage,Classic,Luxury,Retro" %}</blockquote>

## Simple Scroll Overlay Image

<blockquote>{% include image_overlay_simple_scroll.html title="The Sadness" subtitle="Mood" scrolltitle="" image="/assets/images/hero/low/HERO_SADNESS_H_0007.jpg" href=site.url items="Vintage,Classic,Luxury,Retro" %}</blockquote>

# Music

<blockquote>{% include music_player.html playerid='sample' title='Rivellon' artist='Divinity: Original Sin 2' music='/assets/music/Rivellon.mp3' cover='https://cdn-prod.scalefast.com/public/assets/user/6562614/image/fc0fea76b4a2f75dc282d0dba05a31a1.jpg' %}</blockquote>

# Videos

## Normal Video

<blockquote>{% include video.html src='/assets/videos/posts/sample/View_From_A_Blue_Moon_Trailer-270p.mp4' poster='/assets/videos/posts/sample/View_From_A_Blue_Moon_Trailer-HD.jpg' title='View From A Blue Moon Trailer 270p.mp4' %}</blockquote>

## Youtube Video

<blockquote>{% include video.html ytb='QAGDGja7kbs' %}</blockquote>

## Bilibili Video

<blockquote>{% include video.html b='BV1dW411U7sR' %}</blockquote>

# Alerts

## Simple Alerts

<blockquote>{% include alert.html title='Message' msg='This is a normal message' %}</blockquote>

<blockquote>{% include alert.html type='info' title='Info' msg='This is an info message' %}</blockquote>

<blockquote>{% include alert.html type='warning' title='Warning' msg='This is a warning message' %}</blockquote>

<blockquote>{% include alert.html type='success' title='Success' msg='This is a success message' %}</blockquote>

<blockquote>{% include alert.html type='error' title='Error' msg='This is an error message' %}</blockquote>

## Detailed Alerts

<blockquote>{% include alert.html type='info' title='Image' msg='Click to show the image.' image='/assets/images/hero/low/HERO_SADNESS_H_0013.jpg' %}</blockquote>

<blockquote>{% include alert.html type='error' title='Overlay Image' msg='Image with some informations.' image='/assets/images/hero/low/HERO_SADNESS_H_0012.jpg' image_title=site.name image_desc=site.description link=site.url %}</blockquote>

<blockquote>{% include alert.html type='success' title='iFrame' msg='Contains a web page.' iframe=site.url %}</blockquote>

<blockquote>{% include alert.html type='warning' title="Video" msg="Watch this video here." video='/assets/videos/posts/sample/Once_upon_a_virus.mp4' poster='/assets/videos/posts/sample/Once_upon_a_virus.jpg' %}</blockquote>

<blockquote>
{% include alert_detail_start.html title='Detailed' msg='Put anything inside, maybe an Unsplash photo' %}
{% include image_overlay.html unsplash='Bc3Kjwxqu-E' title='Unsplash' desc='Moab, Utah, 2016. A 3 story fire was lit so that we could race our motorcycles around it. This is one for the grandchildren to hear about, maybe after their teen years!' fadein='top' maxwidth="100%" %}
{% include alert_detail_end.html %}
</blockquote>

<blockquote>{% include alert.html type='success' title='Text' msg="Let's try some text." p=site.posts.first.content %}</blockquote>

<blockquote>{% include alert.html type='error' title='Text' msg="Let's try a post." post=site.posts.first %}</blockquote>

<blockquote>{% include alert.html type='warning' title='Text' msg="Find the post based on the given title." post_title='Disable Automatic iOS Backup' %}</blockquote>

<blockquote>
{% include alert_detail_start.html type="info" title='Code' msg='Even a code block!' %}
{% highlight haskell %}
module Main where

main :: IO ()
main = putStrLn "Hello World"
{% endhighlight %}
{% include alert_detail_end.html %}
</blockquote>

# Detailed Block

{% capture detailed_code %}{% highlight objc %}
#import <Foundation/Foundation.h>

int main(int argc, char *argv[]) {
	@autoreleasepool {

	}
}
{% endhighlight %}{% endcapture %}
<blockquote class="layer">{% include detailed.html title='You may want to check this out.' contents=detailed_code %}</blockquote>

# Windowed

## macOS

<blockquote>{% include window_mac_start.html title="PlayStation"%}
{% include image_overlay.html image='/assets/images/hero/high/HERO_GAME_H_0002.jpg' title="PlayStation" desc="Hey, check this out!" link=site.url maxwidth="100%" %}
{% include window_mac_end.html %}</blockquote>

## System 10

<blockquote class="layer-bright">{% include window_old_mac_start.html title=site.posts.first.title %}
{% include toc_skip_generator.html html=site.posts.first.content %}
{% include window_old_mac_end.html btn="Read More" href=site.posts.first.url %}</blockquote>

<blockquote class="layer-bright">{% include window_old_mac_start.html title='Photography' %}
{% include image_frame.html image='/assets/images/hero/high/HERO_PAINTINGS_V_0005.jpg' maxwidth="60%" %}
{% include window_old_mac_end.html btn="View More" href='/gallery/index.html' %}</blockquote>

# Profile Card

<blockquote>{% include card_profile_cycled.html title="the <span>Senorita</span>" caption=site.alias desc=site.description image="/assets/images/avatar.jpg" url=site.url email=site.email %}</blockquote>

<blockquote>{% include card_profile_bordered.html title="Senorita" subtitle=site.alias desc=site.description image="/assets/images/avatar.jpg" url=site.url email=site.email %}</blockquote>
