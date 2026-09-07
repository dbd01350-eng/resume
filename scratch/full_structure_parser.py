import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')

in_elements = False
with open('scratch/tree_structure.txt', 'w', encoding='utf-8') as out:
    for line in lines:
        if 'ELEMENTS:' in line:
            in_elements = True
        if in_elements:
            out.write(line + '\n')

print("Saved tree_structure.txt")
