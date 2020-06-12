---
title: "Xcode: Finding symbolicatecrash"
category: "Xcode"
copy: true
tags: [Xcode, find, symbolicatecrash]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0004.jpg'
---
`symbolicatecrash` 是在开发调试和问题定位中是很常用的工具, 但它在 Xcode 中的位置经常随着 Xcode 版本变化, 不过其实要找到他还是很简单的:

```shell
$ find <Xcode.app_path> -name symbolicatecrash
```

将 `<Xcode.app_path>` 替换为 `Xcode.app` 路径即可。

为了方便使用, 通常我们会将它复制到 `/usr/bin/`:

```shell
$ sudo cp symbolicatecrash /usr/bin/symbolicatecrash
```

这样, 一般来说, 以后就可以直接使用 `symbolicatecrash` 而不附带路径了。

```shell
echo $PATH
```

当然, 前提是你的 `PATH` 变量包含了 `/usr/bin`。

```shell
$ symbolicatecrash -h
usage:
    /usr/local/bin/symbolicatecrash [--help] [--dsym=DSYM] [--output OUTPUT_FILE] <LOGFILE> [SYMBOL_PATH ...]

    <LOGFILE>                   The crash log to be symbolicated. If "-", then the log will be read from stdin
    <SYMBOL_PATH>               Additional search paths in which to search for symbol rich binaries
    -o | --output <OUTPUT_FILE> The symbolicated log will be written to OUTPUT_FILE. Defaults to "-" (i.e. stdout) if not specified
    -d | --dsym <DSYM_BUNDLE>   Adds additional dSYM that will be consulted if and when a binary's UUID matches (may be specified more than once)
    -h | --help                 Display this help message
    -v | --verbose              Enables additional output
```

常见的用法是:

```shell
symbolicatecrash crash_file.crash -d dsym_file.dSYM -o output_file.txt
```
