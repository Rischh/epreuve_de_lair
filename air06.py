# Module et Fonctions

import sys

def only_string(lst,char):
    new_list = []
    
    for i in lst:
        if char.lower() not in i.lower():
            new_list.append(i)
            if new_list == lst:
                print("Error!")
                sys.exit()
    return new_list

# Parsing

lst = sys.argv[1:-1]
charac = sys.argv[-1] 

# Résolution       

result = only_string(lst, charac)

# Affichage

print(result)