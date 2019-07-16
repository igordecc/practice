#generate row of specified unicode characters
#looking for character list? Check the "unicode_characters.py" !
start_number = 0
end_number = 150

## english_words = 1   #97-122 + #65-90

# numbers = 1         #48-57
# apper_case = 1      #65-90
# lower_case = 1      #97-122
# underscore = 1      #95

character_string = ""
for i in range( start_number, end_number ):
    if (47<i)and(i<58):
        character_string += chr(i)
    elif (64<i)and(i<91):
        character_string += chr(i)
    elif (96<i)and(i<123):
        character_string += chr(i)
    elif i == 95 :
        character_string += chr(i)

#output
print(character_string)
