str1 = list(input())
pd = 1
while True:
    if(len(str1)==0 or len(str1)==1):
        break
    chr1,chr2=str1.pop(0),str1.pop(-1)
    print(chr1,chr2)
    if chr1!=chr2:
        pd=0
        break
print(pd)