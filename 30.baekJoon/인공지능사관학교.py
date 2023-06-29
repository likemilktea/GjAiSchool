import sys
sysinput = sys.stdin.readline

n1,n2 = sysinput().split()
print(str(int(n1[::-1]) + int(n2[::-1]))[::-1])
