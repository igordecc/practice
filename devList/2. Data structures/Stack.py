class Stack():
    def __init__(self, itemList):
        self.itemList = itemList

    def push(self, item):
        self.itemList.append(item)

    def pop_ugly(self):
        x = self.itemList[-1]
        self.itemList = self.itemList[:-1]
        return x

    def pop(self):
        return self.itemList.pop()

    def top(self):
        return self.itemList[-1]

if __name__ == '__main__':
    stack = Stack([1,21,3,4,5,4,4,5,465,4])
    for i in range(3):
        print(stack.pop())
    print(stack.top())