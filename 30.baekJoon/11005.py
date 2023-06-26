n,b = list(map(int,input().split()))
result=[]
i = 1
while n>0:
    result.append(n%b**i)
    n=n-result[i-1]
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