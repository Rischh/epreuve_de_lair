# Module / Fonctions

import sys

def error_handling(string):
    for i in string:
        if i.isnumeric():
            print("Error!")
            sys.exit()

def concat(array_str, sep):
    for i in array_str:
        print(i, end = sep)
        
# Error handling

error_handling(sys.argv)          
        
# Parsing
        
array_strings = sys.argv[1:]

separator = sys.argv[-1]

# Résolution et Affichage 
    
concat(array_strings, separator)

print()

