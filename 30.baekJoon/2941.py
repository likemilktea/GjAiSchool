str1 = input()

crotiaChr=['c=',
'c-',
'dz=',
'd-',
'lj',
'nj',
's=',
'z=']

for chr in crotiaChr:
    str1=str1.replace(chr,"a")
print(len(str1))
