import numpy



def mergeSort(array):
    alen = len(array)
    d2array = numpy.array(array).reshape((alen,1))
    print(d2array)
    for i in range(len(d2array), 2):
        print(d2array[i])

    return array

def groupCheckAscending(group1, group2):
    outList = []
    for i,j in group1, group2:
        if i <= j:
            outList.append(i)
            outList.append(j)
        else:
            outList.append(j)
            outList.append(i)
    return outList

def groupCheckDescending(group1, group2):
    outList = []
    for i,j in group1, group2:
        if i >= j:
            outList.append(i)
            outList.append(j)
        else:
            outList.append(j)
            outList.append(i)
    return outList

if __name__ == '__main__':
    a = [
        5,4,32,7,4,7,8,56,7,56,78,65,98,465,4987,465,8,45,8,5,87,5,87,45,8,8,54,787
    ]
    a = numpy.array(a)
    mergeSort(a)
