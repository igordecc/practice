import numpy
import matplotlib.pyplot as plt
import pandas as pd
import math
from scipy.optimize import curve_fit


def autocorr1(x, lags):
    corr = numpy.correlate(x, x, mode="full")
    return corr[len(corr)//2:len(corr)//2 + lags]


def autocorr2(x,lags):
    corr = [1. if l == 0 else numpy.corrcoef(x[l:], x[:-l])[0][1] for l in range(lags)]
    return numpy.array(corr)


# f = open("/home/pavel/PABC/prodgekt/3b.dat", 'r')
f = open("3b.dat", 'r')
a = pd.read_csv(f, header=None)
alen = len(a[0].values)
b = autocorr2(a[0].values[:alen//1], 41000)

ogibausshaya = []
xmax = []
ymax =[]
chek = 0
for n, i in enumerate(zip(b[:-2],  b[1:-1],  b[2:])):
    if  (i[0] < i[1] and  i[1] > i[2]):
        ymax.append(i[1])
        xmax.append(n)

# tcor = 0

# for x,y in zip(xmax, ymax):
#     if max(ymax)/y < math.exp(1):
#         tcor = x
#         break
#     print("None(tcor)")


# print(f"tcor: {tcor}")
#tcor: 207

plt.grid()
plt.plot(b)
plt.plot(xmax, ymax)


def fitting_func(x,a,b,c):
    return a*numpy.e**(-x*b) + c
    # return -a*(x-b)**2 + c

myslice = len(xmax)//3
popt, pcov = curve_fit(fitting_func, xmax[:myslice], ymax[:myslice], )
print(popt)
plt.plot(xmax[:myslice], fitting_func(numpy.array(xmax[:myslice]), *popt),  label='fit: a=%5.3f, b=%5.3f, c=%5.3f' % tuple(popt))
plt.legend()
plt.show()