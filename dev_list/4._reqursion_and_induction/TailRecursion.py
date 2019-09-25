#usual one
def recsum(x):
    if x == 1:
        return x
    else:
        return x + recsum(x-1)

#TAIL RECURSION
def tailrecsum(x, running_total=0):
    if x==0:
        return running_total
    else:
        return tailrecsum(x-1, running_total +x)

if __name__ == '__main__':
    print(recsum(5))
    print(tailrecsum(5))