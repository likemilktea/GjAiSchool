# 문제 : 뭐라고 하는지는 모르겠고 아무튼 작은 숫자에서 큰 숫자 순으로 순서를 매겨라.



def compression(n_list):
    # 중복 제거 및 정렬
    # [2 4 -10 4 -9]
    # [-10 -9 2 4]
    n_set=sorted(set(n_list))
    
    # 정렬된 값 딕셔너리로 순서값 입력
    # [-10 -9 2 4]
    # {-10:0 -9:1 2:2 4:3}
    sorted_dict={cord : i for i, cord in enumerate(n_set)}
        
    # 딕셔너리로 map_nums 값 순서값 대입
    # {-10:0 -9:1 2:2 4:3}
    # [2 3 0 3 1]
    map_nums=[sorted_dict[i] for i in n_list]
    print(map_nums)

n = int(input())
# [2 4 -10 4 -9]
n_list = list(map(int, input().split()))

compressed = compression(n_list)

for value in compressed:
    print(value, end=' ')