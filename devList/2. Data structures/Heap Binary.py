import numpy
class bHeap():
    def __init__(self, itemlist):
        self.itemArray = itemlist
        self.lenA = len(self.itemArray)
        self.treeHeight = int(numpy.ceil(numpy.log2(self.lenA + 1))) - 1

        #self.MaxHeapify_ugly()
        self.MaxHeapify()

    def MaxHeapify_ugly(self):
        array = self.itemArray
        lenA = len(array)

        for i in range(lenA):
            left = 2*i+1
            right = 2*i+2
            largest = i

            if (left < lenA) and (array[left] > array[largest]) :
                largest = left
            if (right < lenA) and (array[right] > array[largest]) :
                largest = right
            if largest != i:
                swap = array[i]
                array[i] = array[largest]
                array[largest] = swap
                self.MaxHeapify_ugly()

    def MaxHeapify(self):
    #THE TREE IS FULL
        for j in range(self.treeHeight, 0, -1):     #0 doesn't count
            for child in range(2**(j)-1, self.lenA):
                parent = int(numpy.floor((child - 1) / 2))
                if self.itemArray[parent] < self.itemArray[child]:
                    self.itemArray[child], self.itemArray[parent] = self.itemArray[parent], self.itemArray[child]
                try:
                    child += 1
                    parent = int(numpy.floor((child - 1) / 2))
                    if self.itemArray[parent] < self.itemArray[child]:
                        self.itemArray[child], self.itemArray[parent] = self.itemArray[parent], self.itemArray[child]
                except:
                    ...

    def extract(self):
        self.itemArray[0], self.itemArray[-1] = self.itemArray[-1], self.itemArray[0]
        root = self.itemArray.pop()
        self.lenA = len(self.itemArray)
        self.MaxHeapify()
        return root

    def print(self):
        array = self.itemArray
        lenA = len(array)

        biba = 0
        iCheck = 0
        treeHeight = self.treeHeight
        for i in range(lenA):
            if i == iCheck:
                end = "\n"
                biba += 1
                iCheck += 2**biba
                treeHeight -= 1
            else:
                end = " "*treeHeight
            print(" "*treeHeight, array[i], end=end)
        print()

    def sort(self):
        array = [self.extract() for i in range(self.lenA)]
        self.itemArray = array
        return array


if __name__ == '__main__':
    #theBHeap = bHeap([2,1112,445,25,78,1234,54,455,455,67,88,9,44,5555])
    theBHeap = bHeap([2, 1112, 445, 25, 78, 1234, 54, 455])

    #===extract==========
    #theBHeap.print()
    # print(theBHeap.extract())
    #theBHeap.print()

    #================sort====
    # theBHeap.sort()
    # theBHeap.print()
    assert all(el1 == el2 for el1, el2 in zip(sorted(theBHeap.itemArray[::], reverse=True), theBHeap.sort())), "ti ne prav"
    #theBHeap = bHeap([2, 1112, 445, 25, 78, 1234, 54])
    #theBHeap.print()
