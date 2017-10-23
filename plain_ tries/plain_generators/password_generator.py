#create password determened length
#looking for character list? Check the "unicode_characters.py" !
import random
pass_length = 10

#english_words = 1   #97-122 + #65-90

# numbers = 1         #48-57
# apper_case = 1      #65-90
# lower_case = 1      #97-122
# underscore = 1      #95

password = ''
character_string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"
for i in range(pass_length):
    password += character_string[random.randint(0,len(character_string)-1)]

#output
print(password)