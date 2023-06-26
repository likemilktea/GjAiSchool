import sys
sysinput = sys.stdin.readline
nList = []
answer = []
maxValue = 0
for x in range(9):
    nList.append(list(map(int,sysinput().split())))
for x in range(9):
    for y in range(9):
        if maxValue < nList[x][y]:
            maxValue = nList[x][y]
            answer=[x+1,y+1]
print(maxValue)
print(answer[0],answer[1])
