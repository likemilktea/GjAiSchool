inputList = []
for i in range(9):
    inputList.append(int(input()))

print(max(inputList),inputList.index(max(inputList))+1)