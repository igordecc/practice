try:
    with open('D:/text.txt') as file:
        file.write('text\n')
except FileNotFoundError:
    print('FileNotFoundError')
