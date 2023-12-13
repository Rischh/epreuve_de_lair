# Module et Fonctions

import sys

def error_handling(string):
    if not len(string) != 2:
        print("Error!")
        sys.exit()

def pyramid(intgr, n):
    k = 0

    for i in range(1, n+1):
        for space in range(1, (n-i)+1):
            print(end="  ")
    
        while k!=(2*i-1):
            print(intgr, end=" ")
            k += 1
    
        k = 0
        print()
        
# Error handling

error_handling(sys.argv)   
        
# Parsing

integer = int(sys.argv[1])
n = int(sys.argv[2])

# Resolution et Affichage

pyramid(integer, n)    