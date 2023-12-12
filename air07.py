# Module et Fonctions

import sys

def insert_element_in_sorted_list(sort_arr, n):
    for i in range(len(sort_arr)):
        if sort_arr[i] > n:
            sort_arr.insert(i, n)
            return sort_arr
    sort_arr.append(n)
    return sort_arr

# Parsing

sorted_array = sys.argv[1:-1]
new_integer = sys.argv[-1] 

# Resolution

result = insert_element_in_sorted_list(sorted_array, new_integer)

# Affichage

print(result)
        