import sys
sysinput = sys.stdin.readline

N,M = map(int,sysinput().split())

Nlist = [sysinput().rstrip() for i in range(N)]
Ndict = {key+1 : value for key, value in enumerate(Nlist)}
NdictSwap = {key : value+1 for value, key in enumerate(Nlist)}

Mlist = [sysinput().rstrip() for i in range(M)]
print('=======================')
for key in Mlist:
    if key.isdigit():
        print(Ndict[int(key)])
    else:
        print(NdictSwap[key])