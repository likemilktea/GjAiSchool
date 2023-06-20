treeList = []
while True:
    try:
        treeList.append(input())
    except:
        break

treeDict={}

sum1=0
for tree in treeList:
    if tree in treeDict:
        treeDict[tree]+=1
    else:
        treeDict[tree]=1
    sum1+=1
treeList=[]
for key,value in treeDict.items():
    treeList.append([key,value/sum1*100])
treeList.sort()
for index in range(len(treeList)): 
    print("%s %.4f" % (treeList[index][0],treeList[index][1])) 
