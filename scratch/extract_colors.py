import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Find all hex colors
colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}', text))
print("=== All Hex Colors in Figma Data ===")
for c in sorted(list(colors)):
    print(c)
