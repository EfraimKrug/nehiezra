f = 'titleList1'
fl = open(f,'r')
lines = fl.readlines()
lastF1 = lastF2 = lastF3 = ""
coll = []
sw = True
firstSw = True

for ln in lines:
	arr = ln.split(",")
	if arr[0] != lastF1:
		print("var " + arr[0] + " = {[")
		lastF1 = arr[0]
		sw = False
	if arr[1] != lastF2:
		if(sw):
			print('\t"list":' + str(coll) + '\n\t},')
		else:
			sw = True
		coll = []
		if(firstSw):
			firstSw = False
		else:
			print("}},")
		print('{\n"sefer":"' + arr[1] + '",\n\"parshalist\":\n{')
		lastF2 = arr[1]
		# print("----------------------------------------------\n")
		sw = False

	arr2 = arr[2].split(".")
	if arr2[0] != lastF3:
		if(sw):
			print('\t"list":' + str(coll) + '\n\t},')
		else:
			sw = True
		print('\t{\n\t"parsha":"' + arr2[0] + '",')
		lastF3 = arr2[0]
		coll = []

	coll.append(int(arr2[1]))

print('\t"list":[1]}\n\t}\n}')
