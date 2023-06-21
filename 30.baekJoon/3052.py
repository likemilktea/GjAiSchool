iDict = {}

# 매 입력마다 42의 나머지를 딕셔너리에 추가
for i in range(10):
    iDict[int(input())%42]=0
# 총 딕셔너리의 숫자만큼 출력
print(len(iDict))