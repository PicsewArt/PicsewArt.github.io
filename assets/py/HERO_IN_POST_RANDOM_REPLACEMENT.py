import re
from os import listdir
from os.path import isfile, join
import fileinput
import random

basepath = '/Volumes/Shared/Common/Git/Picsew/_posts/'
hero_count = 62

onlyfiles = [f for f in listdir(basepath) if isfile(join(basepath, f))]

r = re.compile("  url: '.+?\.jpg'", re.MULTILINE | re.DOTALL)

last_nums = [0, 0, 0, 0, 0, 0]

for afile in onlyfiles:
	filepath = basepath + afile
	f1 = open(filepath, 'r')
	filedata = f1.read()
	f1.close()
	first_search = r.search(filedata)
	if first_search:
		num = 0
		while num in last_nums:
			num = random.randint(1, hero_count)
		hero = "  url: 'HERO_00%02d.jpg'" % num
		newdata = filedata.replace(first_search.group(), hero)
		f2 = open(filepath, 'w')
		f2.write(newdata)
		f2.close()
		print(hero)