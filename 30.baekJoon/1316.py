strList = []
count = 0

def checkGroupWord(str1):
    strNew=str1[0] # strNew의 첫번째 값으로 str1의 첫번째 값을 입력
    for chr in str1: # 반복문을 돌면서 str1의 값을 차례차례 strNew에 채워가면서
        if (chr in strNew) and (chr != strNew[-1]): # 현재 문자가 strNew에 있으면서 마지막 문자인지 확인
            return False # 조건에 해당한다면 False 리턴
        strNew+=chr # 조건에 해당하지 않는다면 strNew에 chr을 입력
    return True # 모든 반복이 끝날 때까지 False가 반환되지 않는다면 True를 반환

# 몇 줄인지 입력 받음
num1 = int(input())
# num1만큼 반복하며 str입력받음
for i in range(num1):
    strList.append(input())
# str갯수만큼 반복문을 돌면서 그룹워드인지 체크 후 카운트 증가
for i in range(num1):
    if checkGroupWord(strList[i]):
        count+=1
# 카운트 출력
print(count)
