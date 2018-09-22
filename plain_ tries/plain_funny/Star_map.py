import numpy as np
#we want to make a star map, constructed from square chunkes
#each chunk can have a star in one of n*n position, where is n is a square's side length
#now, when we have a map, we can see the noise, if we will constantly deploy new stars on the screen in a real time

#@## ctrl + /
star_dict = {
0: ["* * *",
    "* * *",
    "* * *"],

1: ["0 * *",
    "* * *",
    "* * *"],

2: ["* 0 *",
    "* * *",
    "* * *"],

3: ["* * 0",
    "* * *",
    "* * *"],

4: ["* * *",
    "0 * *",
    "* * *"],

5: ["* * *",
    "* 0 *",
    "* * *"],

6: ["* * *",
    "* * 0",
    "* * *"],

7: ["* * *",
    "* * *",
    "0 * *"],

8: ["* * *",
    "* * *",
    "* 0 *"],

9: ["* * *",
    "* * *",
    "* * 0"],
}


def main_loop():    #char + shape -> char array -> string array
    shape = (10, 10)
    star_num_array = np.random.randint(0, 9, shape, dtype=int)
    star_chunk_array = [star_dict[i] for i in star_num_array.flat]

    chunk_size = len(star_dict[0])
    supplement_shape = shape+(chunk_size,)
    star_chunk_array = np.array(star_chunk_array).reshape(supplement_shape) #supplement_shape = (10,10,3)

    global_string = []
    for i in range(supplement_shape[0]):
        new_string = ["" for i in range(supplement_shape[2])]
        for j in range(supplement_shape[1]):
            for k in range(supplement_shape[2]):
                new_string[k] += star_chunk_array[i][j][k] + " "
        global_string.append(new_string)
    global_string = np.array(global_string)
    global_string = global_string.flatten()
    print(*global_string, sep="\n")

if __name__=="__main__":
    import os
    import time
    while 1:
        main_loop()
        time.sleep(0.1)
        os.system("cls")
