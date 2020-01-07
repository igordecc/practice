"""
original python calculator
made to be useful
"""

import numpy as np


def addition(a,b):
    return a + b


def multiplying(a,b):
    return a*b


def subtraction(a,b):
    return a-b


def division(a,b):
    return a/b


def parse_and_do(_string: str):
    splitted_list = _string.split(" ")
    print(splitted_list)

    listed_signs = {"+": addition,
                    "-": subtraction,
                    "/": division,
                    "*": multiplying,
                    #int : 0,
    }

    cash_number = 0
    last_i = 0

    for i in splitted_list:
        """
        there is signs and numbers
        number for numpy and signs for a functions
        """
        if i in listed_signs.keys():
            cash_number = listed_signs[i](cash_number, last_i)
        else:
            try:
                last_i = np.float64(i)
            except:
                print("Unknown character: ", i)     # should add multiple symbols multiplying
                return

    return cash_number



if __name__ == '__main__':
    _string = ""

    print("calculator greeting")
    print("enter numbers and operations")

    while _string != "stop":
        _string = input("do: ")
        result = parse_and_do(_string)
        print(result)

