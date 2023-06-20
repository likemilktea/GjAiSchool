num1 = input()
numArray = input()

numArray=list(map(int,numArray.split())) # split으로 공백 기준 배열로 만들어 인트로 변환

maxScore=max(numArray) # 최고점 기록
sum1 = 0
for i in range(len(numArray)): # 점수/최고점*100으로 점수 갱신
    numArray[i]=numArray[i]/maxScore*100
    sum1+=numArray[i] # 합계에 기록
    

print(sum1/len(numArray))