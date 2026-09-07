import re
import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find all instances of strokes in output.txt
strokes_matches = re.findall(r'(EL-[a-zA-Z0-9]+|#I?[0-9:;-]+|[a-zA-Z0-9_-]+)[\s\S]*?(strokes=[^\n]+)', text)

print(f"Total elements with strokes in Figma: {len(strokes_matches)}")
for node, stroke in strokes_matches:
    print(f"Node: {node[:50]} | {stroke}")
