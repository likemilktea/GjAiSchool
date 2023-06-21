inputList =[]
outputList = []
for i in range(5):
    try:
        inputList.append(list(map(int,input().split())))
    except:
        break
for i in range(1,inputList[0][0]+1):
    outputList.append(i)
for i in range(1,len(inputList)):
        print(outputList[inputList[i][0]-1:inputList[i][1]])
print(outputList)