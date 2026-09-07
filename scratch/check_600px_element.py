import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search for 600 or 630 or hero heights
lines = text.split('\n')
for i, line in enumerate(lines):
    if ('hero' in line or 'title' in line or 'top' in line) and ('600' in line or 'height' in line or 'dimensions' in line):
        print(f"Line {i+1}: {line}")
