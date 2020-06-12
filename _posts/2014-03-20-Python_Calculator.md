---
title: "Python : Calculator"
category: "Python"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0003.jpg'
tags: [GUI,Python,Calculator]
---
用 Python 实现一个 GUI 计算器的基本思路，后面有时间会添加更高级的计算功能:

```python
from __future__ import division
import ui
shows_result = False
def button_tapped(sender):
	t = sender.title
	global shows_result
	label = sender.superview['label1']
	label2 = sender.superview['label2']
	if t in '0123456789':
		if shows_result or label.text == '0':
			label.text = t
		else:
			label.text += t
	elif t == '.' and label.text[-1] != '.':
		label.text += t
	elif t in '+-÷×':
		if label.text[-1] in '+-÷×':
			label.text = label.text[:-1] + t
		else:
			label.text += t
	elif t == 'AC':
		label.text = '0'
	elif t == 'C':
		label.text = label.text[:-1]
		if len(label.text) == 0:
			label.text = '0'
	elif t == '=':
		try:
			label2.text = label.text + ' ='
			expr = label.text.replace('÷', '/').replace('×', '*')
			label.text = str(eval(expr))
		except (SyntaxError, ZeroDivisionError):
			label.text = 'ERROR'
		shows_result = True
	if t != '=':
		shows_result = False
		label2.text = ''
```




