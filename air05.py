# Module et Fonctions

import sys

def error_handling(string):
    if len(string) <= 2:
        print("Error!")
        sys.exit()

def operation_in_list(lst,op):
    new_lst = ([int(x) for x in lst])
    for i in new_lst:
        print(i + op)
        
# Error handling

error_handling(sys.argv)    
        
# Parsing        
        
list = sys.argv[1:-1]
operator = int(sys.argv[-1])

# Résolution et Affichage
       
operation_in_list(list, operator)


            
