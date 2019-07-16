print("""The grammar for a replacement field is as follow:
replacement_field ::= "{" [field_name] ["!" conversion] [":" format_spec] "}"
""")

print("""
This is my replacement field -> {filename!s:}
where ':' is start of the format_specification

Note - don't place spaces around '!' and ':'
#=====================""".format(filename='asddsf'))

print("""Now complex features"""
+
"""lalalalalal string {place!s:s}
""".format(place='!!!s:%@#!'))

print("""
------integer presentation types------

binary {place:b}""".format(place=123))

print("""
character '{place:0c}' from unicode """.format(place=123))
#u can also formatting octal and hex numbers
#they just absent in this early example

print("""
decimal integer
from binary: {binary:d} 
from octal: {octal:d}
from hex: {hex:d}
""".format(octal=0o123, binary=0b1001011, hex=0x2a4d))

print("""octal format
from decimal: {decimal:o}
from hex: {hex:o}
from binary: {binary:o}
""".format(decimal=123, hex=0x2a4d, binary=0b1001011 ))

print("""
hex format. Also HEX format
decimal: {decimal:x}    {decimal:X}
octal: {octal:x}    {octal:X}
binary: {binary:x}  {binary:X}
""".format(decimal=1234, octal=0o1275, binary=0b011100110))

print("""
number ('n' formatting)
decimal: {decimal:n}
""".format(decimal=123455678))


#
print("------strint presentation types-------")
print("""string default formating {string:s}
""".format(string='user_string_here'))
print("""None string format {Nonee:} 
(analogical to string foramt)
""".format(Nonee="user_string_here"))

print("-----floating point and decimal presentation types-----")
print("""
Exponent notation   {eexp:e}
Exponent notation with uppercase   {upperexp:E}
Fixed point notation {fixpoint:f}
Fixed point uppercase {upperfixpoint:F}
General format {general:g}
General format uppercase {uppergeneral:G}
Number (general with separator characters) {numb:n}
None {Nonee:}
""".format(eexp=1234654657787887.41242,
           upperexp=1234654657787887.41242,
           fixpoint=1234654657787887.41242,
           upperfixpoint=1234654657787887.41242,
           general=1234654657787887.41242,
           uppergeneral=1234654657787887.41242,
           numb=1234654657787887.41242,
           Nonee=1234654657787887.41242
           ))
