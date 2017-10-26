#class Classname():
class classname():
    def __init__(self, attribute, self_attribute):
        classname.attribute = attribute
        self.self_attribute = self_attribute

#simple out
constant = classname(123, 1456)
print(constant.attribute)
print(constant.self_attribute)
print()

#simple list out
list_constant = []
# for i in range(10):
#     list_constant.append( classname(i, i*2) )
[ list_constant.append( classname(i, i*2) )for i in range(10) ]

print( [i.attribute for i in list_constant] )
print( [i.self_attribute for i in list_constant] )
