class my_list(list):
    def __getattr__(self, item):
        return [getattr(i,item) for i in self]

if __name__=='__main__':
    x = my_list([complex(1,2), complex(1,2) ])
    print(x.imag)
