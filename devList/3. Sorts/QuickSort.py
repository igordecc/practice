
class doLomutoQS():
    def __init__(self, array):
        self.array = array
        self.lo = 0
        self.hi = len(array) - 1
    def __call__(self, *args, **kwargs):
        self.lQuickSort(self.lo, self.hi)
        return self.array

#1. - recursive!
#2. - procedure forsenT
    def lQuickSort(self, lo, hi):
        if lo < hi:
            p = self.partition(lo, hi)
            self.lQuickSort(lo, p - 1)
            self.lQuickSort(p + 1, hi)

    def partition(self, lo, hi):
        pivot = self.array[hi]
        i = lo
        for j in range(lo, hi):
            if self.array[j] < pivot:
                if i != j:
                    self.array[i], self.array[j] = self.array[j], self.array[i]
                i += 1
        self.array[i], self.array[hi] = self.array[hi], self.array[i]
        return i



if __name__ == '__main__':
    listt = [1,2,34,4,64,58,78,7,48,7987,97,54,54,56,7,8,5,454,7,8,55,45,5,8,78,7,5]
    print(doLomutoQS(listt)())