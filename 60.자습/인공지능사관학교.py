n = int(input())
m = list(map(int,input().split()))
l= sorted(m)
iLi=[]
vLi=[]
li=[]
num=-1
for i,v in enumerate(l):
    if v not in vLi:
        num+=1

    iLi.append(num)
    vLi.append(v)

print(iLi)

for i,v in zip(iLi,vLi):
    for j in range(len(m)):
        if m[j]==v:
            m[j]=i
print(m)