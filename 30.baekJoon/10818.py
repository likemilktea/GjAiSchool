num = input()
num_array = input()

min_num = min([int(num) for num in num_array.split()])
max_num = max([int(num) for num in num_array.split()])
print(min_num,max_num)
