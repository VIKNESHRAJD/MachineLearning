x = [1,2,3] 
print(x)
print(type(x))
print("x[0]=",x[0])
for i in x:
	print (i)
	
y=list(x)
print(y)
y[0]=4
y[1]=3
y[2]=7
print(y)
print(x)

y=x.copy()
print(y)


"""list
accessing the list
changing values
append
extend
copy
addition of lines
remove
pop,clean,del""