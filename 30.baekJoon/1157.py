str1 = input()
# 입력받은 값을 대문자로 치환
str1=str1.upper()
# 각 값을 저장할 딕셔너리 생성
dictCnt = {}
# 딕셔너리에 값 추가
for chr in str1:
    dictCnt[chr] = str1.count(chr)
# 최대값의 키와 밸류를 저장할 변수 선언
maxValue=0
maxKey=''
# 최대값과 같은 개수를 확인할 변수 선언
count = 0
# 최대값 확인
for key,value in dictCnt.items():
    if value > maxValue:
        maxValue = value
        maxKey = key
# 최대값의 개수 확인
for value in dictCnt.values():
    if value == maxValue:
        count+=1
# 최대값이 두 개 이상 존재한다면 출력값을 ?로
if count>1:
    maxKey='?'
    
print(maxKey)
    