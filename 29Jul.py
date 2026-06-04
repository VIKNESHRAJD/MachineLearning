'''A = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6]

for i in set(A):
    print("Count of", i, ":", A.count(i))
    
    
#3

A = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6]
B = set(A)
for i in B:
	print(" Count of", i, ":", A.count(i)
#4    
x = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6]
b = [ ]
for i in x:
	if i not in b:
		b.append(i)
print(b)

#5

#x=[1,2,3,4,5]
#print(x[::-1])

#6
X = [1,10,15,17,20]
Y = max(X)
X.remove(Y)
print("Second Maximum=",max(X))

#7
x = [1,2,3]
y = [4,5,6]

for i in y:
	x.append(i)
print(x)'''

a = [1, 2, 3, 4]
cumulative = []
total = 0
for num in a:
    total += num
    cumulative.append(total)
print("Cumulative sum:", cumulative)