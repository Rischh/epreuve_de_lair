# Module et Fonction

import sys
    
def sorted_fusion(arr1, arr2):
    new_arr = arr1 + arr2
    for i in range(0, len(new_arr)):
        for j in range(i+1, len(new_arr)):
            if new_arr[i] >= new_arr[j]:
                new_arr[i], new_arr[j] = new_arr[j],new_arr[i]
    return new_arr

# Parsing

array1 = sys.argv[1:]

if "fusion" in array1:
    index_mot = array1.index("fusion")
        
    arr1 = array1[:index_mot]
    arr2 = array1[index_mot + 1:]
else:
    print("Error!")
    sys.exit()    
              
# Résolution

result = sorted_fusion(arr1,arr2)

# Affichage

print(result)