import re
import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's parse all style definitions in GLOBAL_VARS
styles = {}
style_matches = re.findall(r'(style_[a-zA-Z0-9]+|font/[^\n]+|fill_[a-zA-Z0-9]+|layout_[a-zA-Z0-9]+):\n([\s\S]*?)(?=\n[a-zA-Z0-9_/]+:|\nELEMENTS:|$)', text)

for name, body in style_matches:
    styles[name] = body.strip()

print(f"Parsed {len(styles)} style definitions")

# Let's list elements and their exact text, style, layout, fills
elements = re.findall(r'(EL-[a-zA-Z0-9]+):\n([\s\S]*?)(?=\nEL-[a-zA-Z0-9]+:|\n\s*\[FRAME\]|\n\s*\[INSTANCE\]|$)', text)
print(f"Parsed {len(elements)} element definitions")

with open('scratch/all_parsed_styles.json', 'w', encoding='utf-8') as out:
    json.dump({
        "style_count": len(styles),
        "element_count": len(elements)
    }, out, indent=2)

print("Saved scratch/all_parsed_styles.json")
