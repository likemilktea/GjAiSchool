n = int(input())
s = input()
answer = [
    ['A','C','A','G'],
    ['C','G','T','A'],
    ['A','T','C','G'],
    ['G','A','G','T']
]
for i in range(n-1):
    a1=s[-2]
    a2=s[-1]
    # a1
    if a1=='A':
        a1=0
    elif a1=='G':
        a1=1
    elif a1=='C':
        a1=2
    else:
        a1=3
    # a2
    if a2=='A':
        a2=0
    elif a2=='G':
        a2=1
    elif a2=='C':
        a2=2
    else:
        a2=3
    s = s[:-2]+answer[a1][a2]
    print(s)

print(s)