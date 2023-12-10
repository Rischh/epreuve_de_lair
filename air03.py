# Module / Fonctions

import sys 

def intruder(arr):
    not_dup = {x for x in arr if not arr.count(x) > 1}
    return not_dup
    
# Parsing    
array = sys.argv[1:]

# Résolution
result = intruder(array)

# Affichage 
print(result)



