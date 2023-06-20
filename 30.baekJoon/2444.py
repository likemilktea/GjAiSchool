num1 = int(input())

# for i in range(num1-1,-1,-1):
#     for j in range(i):
#         print(' ',end='')
#     for j in range(num1-i):
#         print('*',end='')
#     for j in range(num1-i-1):
#         print('*',end='')
#     print('')
for i in range(num1-1,-1,-1):
    print(' '*i,end='')
    print('*'*((num1*2-i*2)-1),end='')
    print("")
for i in range(1,num1):
    print(' '*i,end='')
    print('*'*((num1*2-i*2)-1),end='')
    print("")