import sys
sysinput = sys.stdin.readline

s = sysinput().rstrip()
print(''.join([c.upper() for c in s]))