import os   # import

something = 123 # variable

def do_numbers(x,y):
    add = x + y
    mul = x*y
    div = x/y
    div_2 = x//y
    return add, mul, div, div_2


def fill_dict(_dict: dict, _list: list) -> dict:
    print(_list)
    keys = [x[0] for x in _list]
    values = [x[1] for x in _list]
    for key, value in zip(keys, values):
        _dict[key] = value
    return _dict


class A:
    def __init__(self, location):
        self.location = location
    
    def __call__(self, B: object):
        distance_to_B = abs(B.location - self.location)
        return distance_to_B


def decorator(func):
    def wraper(*args, **kwargs):
        print(__file__)
        return func(*args, **kwargs)
    return wraper

if __name__ == '__main__':
    print(do_numbers(34, 45))
    _list = [
        [1,2],
        [3,2],
        [5,6],
        [4,8],
        [9,3],
        ["ks",2],
    ]
    print(fill_dict(dict(), _list))

    a = A(123)
    b = A(20)
    print(a(b))

    @decorator
    def addition(a,b):
        return a+b
    
    addition(11, 235)
    addition(10, 2325)
    x = addition(10, 5)
    print(f'addition return {x}')