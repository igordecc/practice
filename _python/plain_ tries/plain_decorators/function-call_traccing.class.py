class tracer:
    def __init__(self, func):
        self.calls = 0
        self.func = func
    def __call__(self, *args, **kwargs):
        self.calls += 1
        print('call %s to %s' % (self.calls, self.func.__name__))
        return self.func(*args, **kwargs)

@tracer     #logicaly equevalent to tracer(func)
def spam(a, b, c):
    print(a + b + c)

@tracer
def egg(x, y):
    print(x**y)


spam(1,2,3)
spam(4,5,6)

egg(1,2)
egg(3,4)
