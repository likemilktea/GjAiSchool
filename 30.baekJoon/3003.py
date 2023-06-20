num1 = list(map(int,input().split()))
num2 = []
answer=[1, 1, 2, 2, 2, 8]
for i in range(len(num1)):
    num2.append(str(answer[i] - num1[i]))
num2=' '.join(num2)
print(num2)