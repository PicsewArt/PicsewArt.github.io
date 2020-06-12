---
title: "Python : tree"
category: "Python"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0046.jpg'
tags: [Python,tree]
---
用 Python 实现一个 tree 指令的模拟，后面有时间再做优化:

```python

import os

def main():
	while True:
		path = input('Input a path: ') + ''
		if os.path.exists(path):
			# 去掉末尾分隔符
			if path.endswith(os.sep):
				path = path[:-1]
			fileCount = 0
			directoryCount = 0
			sepFile = '|__ '
			sepDirectory = '|__ '
			sepCount = path.count(os.sep)
			# 遍历目录
			for root, dirs, files in os.walk(path):
				space = ''
				for i in range(root.count(os.sep) - sepCount):
					space += '  '
				last = root.split(os.sep)
				print(space + sepDirectory + last[-1])
				directoryCount += 1
				# 遍历文件
				for fileName in files:
					print(space + '  ' + sepFile + fileName)
					fileCount += 1
			print('You have %i directories and %i files under "%s"' %(directoryCount, fileCount, path))
			break
		else:
			print('Invalid path!\n')
	
if __name__ == '__main__':
	main()

```






