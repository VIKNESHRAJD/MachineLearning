'''#Even
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum=1
for i in x:
	if i % 2==0:
		sum += i
print(sum)

#Odd

x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum=1
for i in x:
	if i % 2!=0:
		sum += i
print(sum)'''

#i)
''''x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(2,10):
	for j in range(2,i+1):
		print(i,end='')
	print("\n")'''
		
#j 
''''x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(1,11):
	for j in range(i):
		print(j,end='')
	print(")'''

x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(1, 11):
    for j in range(i):
        print(j, end=' ')
    print()

for i in range(9,0,-1):
    for j in range(i):
        print(j, end=' ')
    print()
	