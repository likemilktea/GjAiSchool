n = int(input()) # n값 입력 받음
result = 0 # 결과 변수
m = 0 # 결과의 범위 숫자를 담을 변수

def hexa_add(num):
    result=0 # 리턴값 초기화
    for i in range(num+1): # 1~n값까지의 합 연산
        result += i
    result *= 6 # result 1~n까지의 합 * 6
    result += 2 # 이건 왜 1이 아니라 2인가...나도 모르겠다.
    return result

while n >= m:
    m = hexa_add(result)
    result+=1
print(m)
print(result)
