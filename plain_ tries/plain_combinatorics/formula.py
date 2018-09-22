def do_factorial(n):
    product = 1
    while n > 1:
        product = product*n
        n -= 1
    return product


def find_permutations(n, r):
    # find permutations
    # of n distinct objects
    # taken r at a time
    return do_factorial(n) / do_factorial(n-r)


def find_combinations(n, r):
    # find combinations
    # of n distinct objects
    # taken r at a time
    return find_permutations(n, r) / do_factorial(r)


if __name__ == "__main__":
    N = 10
    summ = 0
    for i in range(1, N):
        summ += find_combinations(N, i)
    print(summ)
    print(do_factorial(10))

