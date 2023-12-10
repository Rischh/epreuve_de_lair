# Module / Fonctions

import sys

def error_handling(string):
    if not len(string) == 3:
        print("Error!")
        sys.exit()

def split_based(cut_str, string_sep):
    cut_str_length = len(cut_str)
    string_sep_length = len(string_sep)
    for i in range(cut_str_length):
        if cut_str[i] == string_sep[0]:
            end = i + string_sep_length
            temp = cut_str[i:end]

            if string_sep == temp: 
                return cut_str[:i] + '\n' + (cut_str[end:])

# Error handling

error_handling(sys.argv)            

# Parsing
cut_string = sys.argv[1]

string_separator = sys.argv[2]

# Résolution

split_based_result = split_based(cut_string, string_separator)

# Affichage

print(split_based_result)