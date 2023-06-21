iList =[]
oList = []
iList.append(list(map(int,input().split())))
for i in range(iList[0][1]):
        iList.append(list(map(int,input().split())))
for i in range(1,iList[0][0]+1):
    oList.append(i)
# for i in range(1,len(iList)):
#     tempList = oList[iList[i][0]-1:iList[i][1]]
#     for j in range(len(tempList)):
#         del oList[iList[i][0]-1]
#     for temp in tempList:
#         oList.insert(iList[i][0]-1,temp)
for i in range(1,len(iList)):
    print(iList[i][0],iList[i][1])
    oList = oList[:iList[i][0]-1]+oList[iList[i][1]-1:iList[i][0]-2:-1]+oList[iList[i][1]:]
# oList = oList[:3-1]+oList[4-1:3-2:-1]+oList[4:]
print(oList)

