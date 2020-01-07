class my_class():
    def __init__(self, string):
        self.string = string
    def __format__(self, format_spec):
        #format_spec  =  "some spec string"
        return format(self.string, format_spec)

if __name__ == "__main__":
    x = my_class("stringn")
    print( format(str(x), "s") )