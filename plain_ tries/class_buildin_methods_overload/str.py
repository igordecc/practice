class my_class():
    def __str__(self):
        out = "my_class string representation"
        return out

if __name__ == "__main__":
    x = my_class()
    print(str(x))