def count_not_optimal(b_n:int) -> int:
    if b_n == bin(0):
        return 0
    count = 0
    for num in range(1, b_n):
        count += str(num).count("1")
    return count

if __name__ == "__main__":
    num = 1233333
    print(f"num {num}")
    count = count_not_optimal(num)
    print(f"count 1s {count}")

