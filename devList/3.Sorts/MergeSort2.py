def zipper(listt):
    newListt = list(zip(listt[::2],listt[1::2]))
    return newListt

def merge(list1, list2):
    len1 = len(list1)
    len2 = len(list2)

    mergedList = []
    i,j = 0, 0

    #1) find fist element smal element of two fist
    #2)[first, ]
    #3) wich of two from list1 and list2 is smaller
    #4) repeat 3 untill list1 and list2 end
    while (i < len1) and (j < len2):
        if list1[i] <= list2[j]:
            mergedList.append(list1[i])
            i += 1
        else:
            mergedList.append(list2[j])
            j += 1
    if i==len1:
        mergedList += list2[j:]
    else:
        mergedList += list1[i:]
    return mergedList





if __name__ == '__main__':
    listt0 = [1,2,3,4,5,6,7,887,8878,9878,5,4,54,6,45,7,787,444,55,4]
    listt = [[i,] for i in listt0]
    import math

    newlist = listt
    lenlistt = len(listt)
    for j in range(int(math.log(lenlistt, 2))):
        listt = newlist
        newlist = []
        print(listt)
        for i in zip(*[iter(listt)]*2):
            newlist.append(merge(*i))
        if len(listt) % 2 != 0:
            newlist.append(merge(newlist.pop(-1),listt[-1]))
        print(newlist)
    newlist = newlist[0]
    print(newlist)

    for i in newlist:
        assert i in listt0

