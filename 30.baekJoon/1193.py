n,b = list(map(int,input().split())) # 10진법 값과 진법B를 입력받음
result=[] # 결과를 출력할 리스트
i = 1 
while n>0:
    # 가장 낮은 자리부터 진법의 b의수만큼 나누어 남은 값을 result에 차례대로 저장
    # 진법 b의 수치는 매 반복마다 i에 의해 제곱만큼 증가.
    # ex 36의 0제곱만큼 나눈 나머지-> 36의 1제곱만큼 나눈 나머지 -> 36의 2제곱만큼 나눈 나머지...
    result.append(n%b**i)  
    n=n-result[i-1] # result에 저장한 값만큼 n에서 뺀다. 그렇게 n이 0이 되면 반복 종료
    
    
    result[i-1]=result[i-1]//b**i # b**i를 나눈 몫을 result에 저장. ex 1260 // 36 == 35
    if result[i-1]<10: # 만약에 i가 10미만이라면 i는 str로 전환하여 그대로 result에 입력
        result[i-1] = str(result[i-1]) # 꼭 바꿀 필요는 없지만 A이후의 값과 타입을 맞추기 위해 타입 변환
    else: # 만약 i가 10 이상이라면 +55를 하여 아스키 코드값을 맞추어 result에 입력
        result[i-1] = chr(result[i-1]+55)
    i+=1 # 진법 계산과 result의 인덱스 접근을 위한 i 증가
    


    
# result에는 낮은 자리 값부터 차례로 저장했기 때문에 뒤집어야 정상적인 값이 출력된다.
result.reverse()
for i in result: # 출력 양식에 따라 자리당 한 칸의 공백을 두고 출력
    print(i,end='')