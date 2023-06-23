n,b = input().split()
b = int(b)
total = 0
for i in range(0,len(n)):
    if n[i+1*-1].isdigit(): # 입력값이 숫자일 때
        print(ord(n[(i+1)*-1])-48,b**i)
        total += (ord(n[(i+1)*-1])-48)*b**i # 아스키값을 빼 숫자와 1:1 매칭 시키고 뒷자리부터 제곱값을 곱함. 0제곱은 1
    else: # 입력값이 문자일 때
        print(ord(n[(i+1)*-1])-55,b**i)
        total += (ord(n[(i+1)*-1])-55)*b**i 
print(total)