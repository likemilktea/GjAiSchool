n,m = list(map(int,input().split()))
iList = []
for i in range(m):
    iList.append(list(map(int,input().split())))
iDict = dict(iList,0)
print(n,m)
print(iDict)