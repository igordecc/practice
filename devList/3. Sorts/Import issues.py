


#MOTHER FCER IMPORT ISSUES
try:
    #__import__("D:\\work\\Practice\\devList\\2. Data structures\\Heap Binary.py")
    #from "2._Data_structures.Heap_Binary" import bHeap
    file = open("D:\\work\\Practice\\devList\\2. Data structures\\Heap Binary.py", "r+")
    import sys
    sys.path.append("D:\\work\\Practice\\devList\\2. Data structures")
    __import__("Heap Binary")
except:    print("-0")
try:
    __import__("MergeSort")
except:    print("-1")
try:
    __import__("Insertion sort")
except:    print("-2")


#from DataStructures import Heap_Binary
import pkgutil
print([x[1] for x in pkgutil.iter_modules(path=".")])
import sys
print(sys.path)