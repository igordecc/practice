class my_class():
    def __del__(self):
        print('destroy start')
        print('self = ' + str(self))
        #self = None
        print( 'self = '+str(self) )

if __name__ == '__main__':
    x = my_class()
    del(x)      #"del()" still delete x, even if we don't do this explicit
    try:
        print(x)
    except:
        print('NameError')


#continue...