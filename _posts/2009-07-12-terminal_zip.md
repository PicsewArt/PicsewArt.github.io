---
title: "Terminal: zip"
category: "UNIX"
copy: true
tags: [UNIX, Terminal, zip, password, unzip]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0007.jpg'
---
压缩打包文件是十分常见的操作, 所以今天整理了一些关于 `zip` 指令的内容。

## zip 打包

`zip` 指令的格式为:

```console
zip [参数] <目标文件> <源内容>
```

可以使用的参数有:

<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td><code>-r</code></td>
        <td>递归，将指定目录下的所有文件和子目录一并处理
        </td>
    </tr>
    <tr>
        <td><code>-S</code></td>
        <td>包含系统和隐藏文件
        </td>
    </tr>
    <tr>
        <td><code>-y</code></td>
        <td>直接保存符号连接，而非该连接所指向的文件
        </td>
    </tr>
    <tr>
        <td><code>-X</code></td>
        <td>不保存额外的文件属性
        </td>
    </tr>
    <tr>
        <td><code>-m</code></td>
        <td>将文件压缩并加入压缩文件后，删除源文件
        </td>
    </tr>
    <tr>
        <td><code>-<压缩级别></code></td>
        <td>1~9，数字越大，压缩率越高
        </td>
    </tr>
    <tr>
        <td><code>-F</code></td>
        <td>尝试修复已损坏的压缩文件
        </td>
    </tr>
    <tr>
        <td><code>-T</code></td>
        <td>检查备份文件内的每个文件是否正确无误
        </td>
    </tr>
    <tr>
        <td><code>-q</code></td>
        <td>不显示指令执行过程
        </td>
    </tr>
    <tr>
        <td><code>-g</code></td>
        <td>将文件压缩后附加在既有的压缩文件之后，而非另行建立新的压缩文件
        </td>
    </tr>
    <tr>
        <td><code>-u</code></td>
        <td>更新压缩包内文件
        </td>
    </tr>
    <tr>
        <td><code>-f</code></td>
        <td>更新压缩包内文件。如果符合条件的文件没有包含在压缩包中，则压缩后添加
        </td>
    </tr>
    <tr>
        <td><code>-$</code></td>
        <td>保存第一个被压缩文件所在磁盘的卷标
        </td>
    </tr>
    <tr>
        <td><code>-j</code></td>
        <td>只保存文件名称及其内容
        </td>
    </tr>
    <tr>
        <td><code>-D</code></td>
        <td>压缩文件内不建立目录名称
        </td>
    </tr>
    <tr>
        <td><code>-i <表达式></code></td>
        <td>压缩目录时，只压缩符合条件的文件
        </td>
    </tr>
    <tr>
        <td><code>-x <表达式></code></td>
        <td>排除符合条件的文件
        </td>
    </tr>
    <tr>
        <td><code>-n <文件名后缀></code></td>
        <td>排除指定文件名后缀的文件
        </td>
    </tr>
    <tr>
        <td><code>-b <缓存路径></code></td>
        <td>指定临时文件目录
        </td>
    </tr>
    <tr>
        <td><code>-d <表达式></code></td>
        <td>从压缩文件内删除指定的文件
        </td>
    </tr>
    <tr>
        <td><code>-t <日期时间></code></td>
        <td>把压缩文件的日期设成指定的日期
        </td>
    </tr>
    <tr>
        <td><code>-o</code></td>
        <td>以压缩文件内拥有最新更改时间的文件为准，将压缩文件的更改时间设成和该文件相同
        </td>
    </tr>
    <tr>
        <td><code>-A</code></td>
        <td>调整可执行的自动解压缩文件
        </td>
    </tr>
    <tr>
        <td><code>-c</code></td>
        <td>替每个被压缩的文件加上注释
        </td>
    </tr>
    <tr>
        <td><code>-z</code></td>
        <td>替压缩文件加上注释
        </td>
    </tr>
    <tr>
        <td><code>-k</code></td>
        <td>使用MS-DOS兼容格式的文件名称。
        </td>
    </tr>
    <tr>
        <td><code>-l</code></td>
        <td>压缩文件时，把LF字符置换成LF+CR字符。
        </td>
    </tr>
    <tr>
        <td><code>-ll</code></td>
        <td>压缩文件时，把LF+CR字符置换成LF字符。
        </td>
    </tr>
</table>

举个栗子, 我们将 `sourcefile.txt` 文件压缩为 `zipfile.zip` 并设置密码为 `password`:

```console
zip -r -P password zipfile.zip sourcefile.txt
```

要打包/压缩文件夹也是可以的, 例如 将 `~/Desktop/my_photos/` 这个目录下所有文件和文件夹打包为当前目录下的 `~/Desktop/photos.zip`:

```console
zip -q -r photos.zip ~/Desktop/my_photos
```

第二个例子中我们没有设置密码, 但是因为打包的是文件夹, 文件夹中的内容可能较多, 所以使用了 `-q` 来惯出打包过程中终端的输出信息。

## unzip 解包

`unzip` 指令的格式为:

```console
unzip [参数] <压缩文件> [压缩包中将被释放的文件]
```

可以使用的参数有:

<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td><code>-P <密码></code></td>
        <td>zip压缩包的密码</td>
    </tr>
    <tr>
        <td><code>-d <路径></code></td>
        <td>指定解压路径</td>
    </tr>
    <tr>
        <td><code>-n</code></td>
        <td>解压缩时不覆盖原有文件</td>
    </tr>
    <tr>
        <td><code>-f</code></td>
        <td>覆盖原有文件</td>
    </tr>
    <tr>
        <td><code>-o</code></td>
        <td>不经询问，直接覆盖原有文件</td>
    </tr>
    <tr>
        <td><code>-u</code></td>
        <td>覆盖原有文件，并将压缩文件中的其他文件解压缩到目录中</td>
    </tr>
    <tr>
        <td><code>-l</code></td>
        <td>显示压缩文件内所包含的文件</td>
    </tr>
    <tr>
        <td><code>-t</code></td>
        <td>检查压缩文件是否正确</td>
    </tr>
    <tr>
        <td><code>-z</code></td>
        <td>显示压缩包注释</td>
    </tr>
    <tr>
        <td><code>-Z</code></td>
        <td><code>unzip -Z</code>等于执行zipinfo指令</td>
    </tr>
    <tr>
        <td><code>-j</code></td>
        <td>不处理压缩文件中原有的目录路径</td>
    </tr>
    <tr>
        <td><code>-C</code></td>
        <td>压缩文件中的文件名称区分大小写</td>
    </tr>
    <tr>
        <td><code>-L</code></td>
        <td>将压缩文件中的全部文件名改为小写</td>
    </tr>
    <tr>
        <td><code>-s</code></td>
        <td>将文件名中的空格转换下划线</td>
    </tr>
    <tr>
        <td><code>-X</code></td>
        <td>解压缩时保留文件原来的UID/GID</td>
    </tr>
    <tr>
        <td><code>-q</code></td>
        <td>执行时不显示任何信息</td>
    </tr>
    <tr>
        <td><code>-v</code></td>
        <td>执行是时显示详细的信息</td>
    </tr>
    <tr>
        <td><code>-c</code></td>
        <td>将解压缩的结果显示到屏幕上，并对字符做适当的转换</td>
    </tr>
    <tr>
        <td><code>-p</code></td>
        <td>与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换</td>
    </tr>
    <tr>
        <td><code>-a</code></td>
        <td>对文本文件进行必要的字符转换</td>
    </tr>
    <tr>
        <td><code>-b</code></td>
        <td>不要对文本文件进行字符转换</td>
    </tr>
    <tr>
        <td><code>-x <表达式></code></td>
        <td>处理里排除压缩包中的指定文件</td>
    </tr>
    <tr>
        <td><code>-M</code></td>
        <td>将输出结果送到more程序处理</td>
    </tr>
</table>

举个栗子, 解压当前目录下的 `zipfile.zip` 到 `~/Desktop/myzipfiles/` 目录下:

```console
unzip -q -n -P password zipfile.zip -d ~/Desktop/myzipfiles/
```
