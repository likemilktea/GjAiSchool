n = int(input())
inp = []
sta = []
for i in range(n):
    inp.append(input())

for i in inp:
    if i[:4] == "push":
        sta.append(i[5:])

    elif i == 'pop':
        if len(sta)>0:
            print(sta[0])
            del sta[0]
        else:
            print("-1")
            
    elif i == 'size':
        print(len(sta))

    elif i == 'empty':
        print('1' if len(sta)==0 else '0')

    elif i == 'top':
        print('-1' if len(sta)==0 else sta[0])