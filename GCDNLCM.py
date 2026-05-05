a = int(input("Enter A: "))
b = int(input("Enter B: "))
x, y = a, b
while b:
    a, b = b, a % b
gcd = a
lcm = (x * y) // gcd
print(f"GCD: {gcd}, LCM: {lcm}")