listA = []
listB = []
for i in range(9):
    listA.append(list(map(int,input().split())))
for i in listA:
    for j in i:
        listB.append(j)
print(max(listB))
print((listB.index(90)//9)+1,(listB.index(90)%9)+1)