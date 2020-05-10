import autoit
size = autoit.win_get_client_size("Program Manager")
x = autoit.pixel_get_color(0,0)
print(size)
print(x)
for i in range(10**3):
    autoit.pixel_get_color(0, 0)

# pixelmatrix = [[autoit.pixel_get_color(x,y) for y in range(1,size[1])] for x in range(1,size[0])]