inputList = []
outputStr = ""
for i in range(5):
    inputList.append(input().split())
maxLength = 0
for i in inputList:
    if maxLength<len(i[0]):
        maxLength=len(i[0])
for i in range(maxLength):
    for j in range(len(inputList)):
        try:
            outputStr+=inputList[j][0][i]
        except:
            continue

print(outputStr)