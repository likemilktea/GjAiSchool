import sys
sysinput = sys.stdin.readline().rstrip
a = list(map(int,list(sysinput())))
answer = []
for i in range(len(a)-1,-1,-1):
    if a[i] == 0:
        answer.append(7)    
    elif a[i]>=7:
        answer.append(7)
    elif a[i]>=4:
        answer.append(4)
    else:
        break
answer.reverse()
answer=list(map(str,answer))
for c in answer:
    print(c,end='')