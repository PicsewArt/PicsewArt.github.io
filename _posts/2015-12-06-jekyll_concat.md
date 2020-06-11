---
title: "Concatenate arrays in liquid"
category: "Jekyll"
copy: true
tags: [Jekyll, Liquid, concat]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0048.jpg'
---
今天在使用 Jekyll 时遇到一个问题: 数组合并。

第一反应是使用 `concat` 过滤, 但是实际操作后并没有效果。查阅了一些 [资料](https://github.com/Shopify/liquid/blob/3-0-stable/lib/liquid/standardfilters.rb) 发现, 虽然 Liquid 本身已经支持 `concat`, 但并不包括在 Liquid 核心部分中, 因此在目前 Jekyll 的稳定版本中尚未实现。

> 关于 `concat` 过滤器的示例请参见: [https://help.shopify.com/themes/liquid/filters/array-filters#concat](https://help.shopify.com/themes/liquid/filters/array-filters#concat)

与此同时, 解决方案至关重要:

```ruby
=begin
  Jekyll filter to concatenate arrays
  Usage:
    {% raw %}{% assign result = array-1 | concatArray: array-2 %}{% endraw %}
=end
module Jekyll
  module ConcatArrays

    # copied from https://github.com/Shopify/liquid/blob/v4.0.0.rc3/lib/liquid/standardfilters.rb
    def concat(input, array)
      unless array.respond_to?(:to_ary)
        raise ArgumentError.new("concat filter requires an array argument")
      end
      InputIterator.new(input).concat(array)
    end

   class InputIterator
      include Enumerable

      def initialize(input)
        @input = if input.is_a?(Array)
          input.flatten
        elsif input.is_a?(Hash)
          [input]
        elsif input.is_a?(Enumerable)
          input
        else
          Array(input)
        end
      end

      def concat(args)
        to_a.concat(args)
      end

      def each
        @input.each do |e|
          yield(e.respond_to?(:to_liquid) ? e.to_liquid : e)
        end
      end
    end

  end
end

Liquid::Template.register_filter(Jekyll::ConcatArrays)
```

更多插件的相关知识请参考 [官方文档](https://jekyllrb.com/docs/plugins/)。

不过, 由于 Github Pages 并不支持扩展插件, 目前还没有找到太好的解决方案。

```jekyll
{% raw %}{% assign all_hosts = "" | split: "" %}{% endraw %}
{% raw %}{% for host in site.data.shared_hosts %}{% endraw %}
  {% raw %}{% assign all_hosts = all_hosts | push: host %}{% endraw %}
{% raw %}{% endfor %}{% endraw %}
{% raw %}{% for host in site.data.paas_hosts %}{% endraw %}
  {% raw %}{% assign all_hosts = all_hosts | push: host %}{% endraw %}
{% raw %}{% endfor %}{% endraw %}
```
