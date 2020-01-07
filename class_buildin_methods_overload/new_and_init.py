class my_class():
    def __new__(cls, *args, **kwargs):
        return cls.__init__(cls, *args, **kwargs)
    def __init__(self, a, b):
        self.a = a      #instance's attributes
        self.b = b
        return self     #dont save instance without this operation

if __name__ == "__main  __":
    x = my_class(1,2)       #a=1; b=2
    print(x)
    print(x.a)
    print(x.b)