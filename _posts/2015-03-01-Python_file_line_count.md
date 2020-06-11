---
title: "Python: 统计代码行数"
category: "Python"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
tags: [python]
---
无所事事，忽然想到统计一下自己写的项目的代码行数。

```python

#!/usr/bin/env python3

import os, sys, getopt

thisFile = os.path.splitext(os.path.basename(__file__))[0]
thisVersion = '1.0.0'

# 输出程序标题
def printTitle():
	title = 'Line Counter by Meniny'
	sep = ''
	for i in range(len(title) + 2):
		sep += '-'
	print(sep + '\n ' + title + '\n' + sep)

# 输出帮助信息
def help():
	print(thisFile + '(' + thisVersion + ')'+ ' Usage:')
	print('-h, --help:         show this help message')
	print('-v, --version:      show version info')
	print('--p, --path:        Setter path with argument')
	print('--d, --detail:      enable detail log')
	print('--e, --exception:   enable exception log')
	print('--r, --redirection: optimize log for redirection')

# 输出版本信息
def version():
	print(thisFile + ' Version: ' + thisVersion)

# 结束程序
def exit():
	sys.exit(1)

def main(argv):
	printTitle()
	extensions = ['.h', '.m', '.swift', '.js', '.mm', '.c', '.cpp', '.py', '.rb', '.hs', '.sh', '.java', '.pr']
	totalCount = 0
	fileCount = 0
	try:
		# 提取选项与参数
		opts, args = getopt.getopt(argv[1:], 'hvo:', ['path=', 'detail', 'exception', 'redirection'])
		# 初始化路径与输出设置
		folder = ''
		detailBool = False
		exceptionBool = False
		redirectionBool = False
		# 校验选项和参数
		shouldAnalyse = True
		for o, a in opts:
			if o in ('-h', '--help'):
				help()
				shouldAnalyse = False
			elif o in ('-v', '--version'):
				version()
				shouldAnalyse = False
			elif o in ('--p', '--path'):
				folder = a
			elif o in ('--d', '--detail'):
				detailBool = True
			elif o in ('--e', '--exception'):
				exceptionBool = True
			elif o in ('--r', '--redirection'):
				redirectionBool = True
		if not shouldAnalyse:
			exit()
		hasOpts = len(opts) > 0
		if not hasOpts and len(folder) <= 0:
			# 路径为空且没有选项，输入路径
			folder = input('Path of project: ') + ''
		# 如果输入的路径为.或./或空，则设置为当前路径
		if folder == '.' or folder == './' or len(folder) <= 0:
			folder = os.getcwd()
		if not os.path.exists(folder):
			# 非法路径，提示并退出
			print('Invalid path!\n')
			exit()
		print('Path: ' + folder)
		# 如果没有选项，则询问输出设置
		if not hasOpts:
			if not detailBool:
				detail = input('Enable detail log? (y/n): ')
				detailBool = detail == 'y' or detail == 'Y'
			if not exceptionBool:
				exception = input('Enable exception log? (y/n): ')
				exceptionBool = exception == 'y' or exception == 'Y'
			if not detailBool and not redirectionBool:
				redirection = input('Optimize log for redirection? (y/n): ')
				redirectionBool = redirection == 'y' or redirection == 'Y'
		# 显示输出设置的状态
		print('Log Status:')
		if detailBool:
			print('Detail log enabled')
		else:
			print('Detail log disabled')
		if exceptionBool:
			print('Exception log enabled')
		else:
			print('Exception log disabled')
		if redirectionBool:
			print('Log optimized for redirection')
		else:
			print('Log NOT optimized for redirection')
		print('Analyzing...')
		# 遍历目录
		for root, dirs, files in os.walk(folder):
			# 遍历文件
			for fileName in files:
				# 后缀名是需要统计的文件后缀
				if os.path.splitext(fileName)[1] in extensions:
					path = os.path.join(root, fileName)
					if os.path.exists(path):
						# 存在则打开
						handler = open(path, "rU", 1, "utf8")
						try:
							fileCount += 1
							thisCount = 0
							for line in handler:
								# 统计非空行
								if line.split():
									thisCount += 1
							totalCount += thisCount
							# 输出每个文件及行数
							if detailBool:
								print('%i - %s' %(thisCount, path))
							else:
								# 输出处理进度
								if redirectionBool:
									print('Handled file(s): %i, Non-blank line(s): %i' %(fileCount, totalCount), end='\r')
						except Exception as exp:
							# 输出解析错误的信息
							if not exceptionBool:
								print('\nERROR: %s\nFILE: %s\n' %(exp, path))
						finally:
							handler.close()
		# 全不解析完毕，输出统计结果
		print('You have %i non-blank line(s) of code in %i file(s).'%(totalCount, fileCount))
		print('The valid file extensions are %s' %extensions)
	except getopt.GetoptError as err:
		# 错误的选项，输出错误并退出
		print(str(err))
		help()
		exit()
  
if __name__ == '__main__':
	main(sys.argv)

```

保存后，你可以在终端中的任意工作目录下使用 `python3 fileFullPath` 来执行这个 Python 文件，程序会指引你输入工程路径等操作。

此外:

* 你可以使用 `-h` 来查看帮助

* 使用 `-v` 选项查看版本信息

* 为了方便将结果重定向到指定文件，还提供了 `--p projectPath` 或 `--path projectPath` 选项设定工程路径。

* 使用 `--d` 或 `--detail` 让程序输出每一个分析过的文件及其行数的详细信息。如果你没有启用这个特性，程序将会自动输出处理进度，你可以通过 `--r` 或 `--redirection` 开屏蔽。

* 如果解析文件发生错误，你还可以使用 `--e` 或 `--exception` 来启用错误输出功能。







