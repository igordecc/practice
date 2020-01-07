import autoit
size = autoit.win_get_client_size("Program Manager")
pixelmatrix = [[autoit.pixel_get_color(x,y) for y in size[1]] for x in size[0]]