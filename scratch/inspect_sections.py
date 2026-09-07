import re
import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract detail for each section
sections = [
    'header',
    'section-hero',
    'section-about',
    'section-statistics',
    'section-projects',
    'section-approach',
    'section-marquee-text',
    'section-marquee-images',
    'section-cta',
    'footer'
]

for sec in sections:
    print(f"\n==================== {sec} ====================")
    pattern = rf'\[FRAME\]\s*"{sec}"[\s\S]*?(?=\n\s*\[FRAME\]\s*"section-|\n\s*\[FRAME\]\s*"footer"|$)'
    match = re.search(pattern, text)
    if match:
        content = match.group(0)
        # print first 1500 chars of section
        print(content[:2000])
    else:
        print("NOT FOUND")
