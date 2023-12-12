# Module et Fonctions

import sys

def error_handling(string):
    if not len(string) != 2:
        print("Error!")
        sys.exit()

def rotation_lst(lst):
    n = 1
    rotation_left = lst[n:] + lst[:n]
    return rotation_left

# Error handling

error_handling(sys.argv)   

# Parsing

lst = sys.argv[1:]

# Résolution

result = rotation_lst(lst)

# Affichage

print(result)