import re
import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

target_nodes = [
    "body", "header", "nav", "main", "section-hero", 
    "hero-content", "hero-top", "hero-title-wrap", 
    "hero-title-images", "hero-title-text", "hero-title-row-1", 
    "hero-title-row-2", "hero-bottom", "hero-data", "hero-stats"
]

lines = text.split('\n')
for i, line in enumerate(lines):
    for node in target_nodes:
        if f'"{node}"' in line or f'#{node}' in line:
            print(f"Line {i+1}: {line}")
