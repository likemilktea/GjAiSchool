n = int(input())
result = [4,9] # 결과값 리스트 result[-1]가 결과 형태
for i in range(2,n+1):
    # (마지막 값의 제곱근 * 2 )-1의 제곱한 값
    result.append(int(((result[-1]**(1/2)*2)-1)**2))
print(result[-1])