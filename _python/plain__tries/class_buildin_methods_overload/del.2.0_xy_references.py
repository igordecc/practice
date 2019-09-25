class my_class():
    def __del__(self):
        print('destroy start    and at the end of the programm we delete it')
        print('self = ' + str(self))
        #self = None
        print( 'self = '+str(self)+"    but delete it after method __del__(), 'cause we rewrited __del__() without 'self = None' part")

if __name__ == '__main__':
    x = my_class()
    y = x
    del(x)
    try:
        print(x)
    except:
        print('NameError' + "   fist - after del() we fix, that there is no 'x'")
    print(str(y) + " but we don't delete it!    <-str(y)")