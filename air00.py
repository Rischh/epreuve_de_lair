# Module / Fonctions

import sys

def error_handling(string):
    if not len(string) == 2:
        print("Error!")
        sys.exit()

def split(cut_str, string_sep):
    result_list = []
    
    pre_char = ""
    
    for i in cut_str:
        if i in string_sep:
            result_list.append(pre_char)
            pre_char = ""
        else:
            pre_char += i
            
    result_list.append(pre_char)

    return result_list

# Error handling

error_handling(sys.argv)            
            
# Parsing
cut_string = sys.argv[1]

string_separator = [' ', '\t', '\n']

# Résolution

split_result = split(cut_string, string_separator)

result_str = '\n'.join(split_result)

# Affichage

print(result_str)
