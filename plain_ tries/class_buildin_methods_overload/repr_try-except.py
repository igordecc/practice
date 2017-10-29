class my_class():
    def __repr__(self):
        try:
            pass
            out = 'my_class string representation'
        except:
            out = 'exception'
        return out

if __name__ == "__main__":
    x = my_class()
    print(str(x))