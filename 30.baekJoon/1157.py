<<<<<<< Updated upstream
n,b = list(map(int,input().split())) # 10진법 값과 진법B를 입력받음
result=[] # 결과를 출력할 리스트
i = 1 
while n>0:
    # 가장 낮은 자리부터 진법의 b의수만큼 나누어 남은 값을 result에 차례대로 저장
    # 진법 b의 수치는 매 반복마다 i제곱만큼 증가.
    # ex 36의 0제곱만큼 나눈 나머지
    result.append(n%b**i)  
    n=n-result[i-1] # 
    i+=1
for i in range(len(result)):
    result[i]=result[i]//b**i
    if result[i]<10:
        result[i] = str(result[i])
    else:
        result[i] = chr(result[i]+55)

result.reverse()
for i in result:
    print(i,end='')
=======
import sys
sysInput = sys.stdin.readline

n = int(sysInput().rstrip())
c = 0
i = n
while True:
    c+=1 # 카운트
    if i < 10:
        i = '0' + str(i)
    else:
        i = str(i)
    m = int(i[0])+int(i[1])
    l = i[-1] + str(m)[-1]
    if int(n) == int(l):
        break
    else:
        i = int(l)
print(c)
>>>>>>> Stashed changes
