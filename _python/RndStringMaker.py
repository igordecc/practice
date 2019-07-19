import random


def makeRndString(charset:set,
                  length:int=200):
    """
    get string with character generated from set randomly
    :param charset: set of characters
    :param length: int
    :return: string of random characters from set
    instead of random.choice we use random.sample to avoide index error
    """
    list_of_chars = [random.sample(charset, 1)[0] for i in range(length)]
    result = "".join(list_of_chars)
    return result

if __name__ == '__main__':
    charset = set("12 345 6789 ")
    result_str = makeRndString(charset)
    print(result_str)