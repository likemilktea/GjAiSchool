t = int(input())
c = []
resultDict = {'Quarter':0, 'Dime':0, 'Nickel':0, 'Penny':0}
changeDict = {'Quarter':25, 'Dime':10, 'Nickel':5, 'Penny':1}
for i in range(t): # 입력부
    c.append(int(input()))

for i in range(len(c)): # 잔돈 입력수 만큼 반복
    resultDict['Quarter'],c[i] = c[i]//changeDict['Quarter'],c[i]%changeDict['Quarter'] # 25로 나눈 값 대입
    resultDict['Dime'],c[i] = c[i]//changeDict['Dime'],c[i]%changeDict['Dime'] # 나머지에서 10으로 나눈 값 대입
    resultDict['Nickel'],c[i] = c[i]//changeDict['Nickel'],c[i]%changeDict['Nickel']# 나머지에서 5로 나눈 값 대입
    resultDict['Penny'] = c[i] # 나머지 값 대입
    print(f"{resultDict['Quarter']} {resultDict['Dime']} {resultDict['Nickel']} {resultDict['Penny']}") # 공백을 기준으로 각각 출력