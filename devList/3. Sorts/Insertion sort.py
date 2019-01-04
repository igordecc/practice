def insertionSort(unsortedList):
    listt = unsortedList

    lenlist= len(listt)
    i = 1
    while i <lenlist:
        j = i
        while (j>0) and (listt[j-1] > listt[j]):
            print(listt[j-1], listt[j], "+")
            listt[j], listt[j-1] = listt[j-1], listt[j]
            j -=1
        i += 1
    sortedList = listt
    return sortedList

if __name__ == '__main__':
    listt = [1,23,4,5,6,7,74,4,544,457,4,5,7,8,9,798,7,7,7,6]
    print(insertionSort(listt))