import sys
sysinput = sys.stdin.readline
n = int(sysinput())
mLi = []
for i in range(n):
    mLi.append(list(map(int,sysinput().split())))
lLi =[]
for i in range(0,10):
    lLi.append([str(i**j)[-1] for j in range(1,5)])

for i in mLi:
    # print(i[1]%4)
    print(lLi[i[0]][i[1]%4] if i[1]%4-1<0 else lLi[i[0]][3])