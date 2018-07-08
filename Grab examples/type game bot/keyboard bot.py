import keyboard as kbr
import numpy as np

def toint(atr, precision):
    return int(atr * precision)

def random_float(low, hight, precision):
    intlow = toint(low, precision)
    inthigh = toint(hight, precision)

    randintnumber = np.random.randint(intlow, inthigh)
    randflownumber = randintnumber/precision
    return randflownumber

stringoftext = "shot the knees. I run fast, so fast that the world around me turn into colorful mess of patterns. The higher was speed, the brighter it was look. But right after the colors closed and I fill permanently blind, untill the centerfuger wasn't stop."
kbr.write(stringoftext, delay=random_float(0.05, 0.2, 1000))
