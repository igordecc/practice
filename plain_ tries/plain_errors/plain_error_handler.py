x = [0 , 1, 2]
try:
    print(x[3])
except IndexError:
    print('Error')
except:
    print('unknown exception')
else:
    print('wow, no exceptions!')
finally:
    print('finaly do something')

#next string is working right, its ok
assert False, 'ThisISAssertionError'