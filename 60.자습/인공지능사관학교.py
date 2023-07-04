import sys
sysinput = sys.stdin.readline
n = int(sysinput())
answers = []
for i in range(n):
    answers.append(list(map(int,sysinput().split())))
print("Gnomes:")
for a in answers:
    if a==sorted(a) or a==sorted(a,reverse=True):
        print("Ordered")
    else:
        print("Unordered")