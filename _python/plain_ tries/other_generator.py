#numpy staff and generators
import numpy
from numpy import matlib

rowlengthnumber = 10
narray = numpy.array(i for i in range(rowlengthnumber))

arraydimentions = 2
zeroarray = numpy.zeros(shape=[rowlengthnumber for i in range(arraydimentions)])

angle = numpy.angle([1, -0.52, -0.1], 1)

#output
print('narray ', narray)
print('zeroarray ', zeroarray)
print('angle ', angle)