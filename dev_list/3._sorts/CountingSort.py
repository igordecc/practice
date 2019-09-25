import numpy

def countingSort(unsortedList, valuesRange):
    #valuesRange - is non negative values range
    countArray = numpy.zeros(valuesRange, dtype="int64")
    listlen = len(unsortedList)
    for i in range(listlen):
        countArray[unsortedList[i]] += 1
    #my vision how to do the next step
    # complex "for" expressiob - more general goes first
    sortedList = [i for i in range(valuesRange) for j in range(countArray[i])]
    return sortedList

if __name__ == '__main__':
    listt = [1,2,4,56,7,8,45,6,78,7,64,67,87,64,56,8,78,4,54,87,86,56,67,87,68,7,88,78,4,54]
    print(countingSort(listt, 100))