# Module et Fonction
import sys

def error_handling(string):
    if not len(string) == 2:
        print("Error!")
        sys.exit()

def remove_repeats(string):
    for i in range(len(string)):
        for j in range(i + 1, len(string)):
            while string[i:j] == string[j:j + j - i]:
                string = string[:j] + string[j + j - i:]
    return string

# Error handling

error_handling(sys.argv)    

# Parsing
strg = sys.argv[1]

# Resolution
result = remove_repeats(strg)

# Affichage
print(result)



