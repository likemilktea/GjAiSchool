num1 = int(input())
results = []
for index in range(num1):
    results.append(input())
sum1 = 0
conti = 0
for result in results:
    sum1=0
    conti=0
    for i in result:
        if i == "O":
            conti+=1
            sum1+=conti
        else:
            conti=0
    print(sum1)