x=[1,2,3,4]
x.append(5)
print(x)

for i in range(5,21):
	x.append(i)
print(x)
	
	
y=[21,22,23,24,25]

x.extend(y)
print(x)
z=x+y
print(z)

z.pop(2)
print(z)
