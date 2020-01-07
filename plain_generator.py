
#generators

##built-in generators
range_numb = 10
plain_list = [i*i for i in range(range_numb)]

plain_dict = {i:i*i for i in range(range_numb)}

plain_cortage = (i for i in range(range_numb))

#output
print(plain_list)
print(plain_dict)
print(plain_cortage)

