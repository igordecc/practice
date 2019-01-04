class Queue():
    def __init__(self, itemList):
        self.itemList = itemList


    def push(self, item):
        self.itemList.insert(0,item)


    def pop_ugly(self):
        x = self.itemList[-1]
        self.itemList = self.itemList[:-1]
        return x

    def pop(self):
        return self.itemList.pop()

    def first(self):
        return self.itemList[0]

    def last(self):
        return self.itemList[-1]


if __name__ == '__main__':
    #tail[1, 2, 2, 34, 4, 564, 657, 4, 5]head

    queue = Queue([1,2,2,34,4,564,657,4,5])
    for i in range(4):
        print(queue.pop())
    queue.push(212332)
    for i in range(4):
        print(queue.pop_ugly())

    print(queue.first())
    print(queue.last())