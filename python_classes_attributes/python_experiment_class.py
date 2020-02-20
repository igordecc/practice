"""
resurch about atributes and methods
__repr__
"""

import PyQt5.QtWidgets
class myWidjget(PyQt5.QtWidgets.QWidget):
    def __init__(self):
        super().__init__()

def prints(x):
    print(repr(repr))

    print("repr Widget: " + repr(x))
    print(x.__str__)
    print(x.__class__)
    print(x.__repr__)
    # print(x.__dict__)
    print(x.__doc__)

class emptyClass:
    pass

prints(PyQt5.QtWidgets.QWidget)
print("---------")
prints(emptyClass)