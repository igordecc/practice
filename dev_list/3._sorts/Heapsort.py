import sys
sys.path.append("D:\\work\\Practice\\devList\\2. Data structures")
heapb = __import__("Heap Binary")

def heapSort(unsortedList):
    itemHeap = heapb.bHeap(unsortedList)
    sortedList = []
    for i in range(len(unsortedList)):
        extracted = itemHeap.extract()
        sortedList.append(extracted)
    return  sortedList

if __name__ == '__main__':
    itemList = [1122,456,78,78,7,87,78,78,6455,77,84,1,2,34,5,7,8]
    print(heapSort(itemList))
