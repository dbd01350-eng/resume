import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
for i, line in enumerate(lines):
    if 'layout' in line or 'dimensions' in line or 'padding' in line or 'gap' in line:
        if i < 400: # Global layouts & styles
            print(f"{i+1}: {line}")
