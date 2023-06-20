listA = []
listB = []
numlist = list(map(int,input().split()))

for i in range(numlist[0]):
    listA.append(list(map(int,input().split())))
for i in range(numlist[1]):
    listB.append(list(map(int,input().split())))
    
for i,j in zip(listA,listB):
    for k,l in zip(i,j):
        print(k+l,end=' ')
    print("")