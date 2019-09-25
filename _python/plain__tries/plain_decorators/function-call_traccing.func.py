def tracer(func):
    call = 0
    def wrapper(*args, **kwargs):
        nonlocal call
        call += 1
        print('call %s to %s' % (call, func.__name__))
        return func(*args, **kwargs)
    return wrapper

@tracer
def spam(a, b, c):
    print(a + b + c)

@tracer
def egg(x, y):
    print(x**y)


spam(1,2,3)
spam(4,5,6)

egg(1,2)
egg(3,4)
