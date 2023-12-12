# Module et Fonctions

import sys

def read_file(file):
    f = open(file, "r")
    print(f.read())

# Parsing

file = sys.argv[1]

# Resolution et Affichage

read_file(file)