quickSort = __import__("QuickSort")



def bucketSort(array, k):
    buckets = [[] for i in range(k+1)]
    M = max(array)
    lena = len(array)
    for i in range(lena):
        buckets[int(array[i]/M*k)].append(array[i])
        sortbuckets = [quickSort.doLomutoQS(buck)() for buck in buckets]

    sortedArray = []
    [sortedArray.extend(i) for i in sortbuckets]

    return sortedArray

if __name__ == '__main__':
    listt = [1,2,46,465,65,7,78,4,5,467,98,4,454,654,654,657,8,6,45,7,564,465,7,89,784,56,46,78]
    newlistt = bucketSort(listt, 5)
    print(newlistt)
    assert len(listt)==len(newlistt)