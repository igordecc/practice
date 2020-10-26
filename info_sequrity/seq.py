# from book
# Rehim R. - Effective Python Penetration Testing - 2016

# get entry point
# return file in asm, aster the entry point
from capstone import *
import pefile
pe = pefile.PE('D:\\pabcnetc.exe')
entryPoint = pe.OPTIONAL_HEADER.AddressOfEntryPoint
print("entry Point: "+ str(entryPoint))
print("data len: " + str(len(pe.get_memory_mapped_image())))
data = pe.get_memory_mapped_image()[entryPoint:]
cs = Cs(CS_ARCH_X86, CS_MODE_32)
for i in cs.disasm(data, 0x1000):
    print("0x%x:\t%s\t%s" %(i.address, i.mnemonic, i.op_str))