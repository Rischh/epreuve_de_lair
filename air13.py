import os.path
import subprocess
from colorama import Fore, Style

def check_path(ex,count):
    def check_work_file(ex,count):
        for i in ex:
            path = i
            check_file = os.path.exists(path)
                    
            cmd = f"python3 ./{path}" 
            p1 = subprocess.Popen(cmd, shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            p1.wait()
            
            if check_file:
                count += 1
                print(f"{path} (1/2) : " + Fore.GREEN + 'success' + Style.RESET_ALL)
            else:
                print(f"{path} (0/2) : " + Fore.RED + 'failure' + Style.RESET_ALL)

            if p1.returncode == 0:
                count += 1
                print(f"{path} (2/2) : " + Fore.GREEN + 'success' + Style.RESET_ALL)
            else:
                print(f"{path} (1/2) : " + Fore.RED + 'failure' + Style.RESET_ALL)
                
        print(f"Total success : {count}")
        
    check_work_file(exercise,count)
                                    
exercise = ["air00.py", "air01.py", "air02.py", "air03.py", "air04.py", "air05.py", "air06.py", "air07.py", "air08.py", "air09.py", "air10.py", "air11.py", "air12.py"]

count = 0

check_path(exercise,count)


