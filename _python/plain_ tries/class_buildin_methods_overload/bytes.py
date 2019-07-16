class my_class():
    def __init__(self, a):
        self.a = a
    def __bytes__(self):        #"return bytes(input_variable)"
        return bytes(self.a)

if __name__ == "__main__":
    x = my_class(123)
    print(bytes(x))