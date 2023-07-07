f = []
while True:
    f.append(sum(list(map(int,input().split(' ')))))
    if f[-1]==0:
        break
del f[-1]
for s in f:
    print(s)