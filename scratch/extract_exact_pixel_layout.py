import re
import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract all layout definitions
layouts = re.findall(r'(layout_[a-zA-Z0-9]+):\n([\s\S]*?)(?=\n[a-zA-Z0-9_/]+:|\nELEMENTS:|$)', text)
layout_dict = {}
for name, body in layouts:
    layout_dict[name] = body.strip()

print(f"Total layout definitions: {len(layout_dict)}")

# Let's search for exact width/height/padding/gap in element blocks
elements = re.findall(r'(\[FRAME\]\s*"([^"]+)"[^\n]*\n([\s\S]*?)(?=\n\s*\[FRAME\]|\n\s*\[INSTANCE\]|\n\s*\[RECTANGLE\]|$))', text)

with open('scratch/exact_pixel_nodes.json', 'w', encoding='utf-8') as out:
    parsed_items = []
    for full, name, body in elements:
        dims = re.search(r'dimensions:\s*\{([^}]+)\}', body)
        padding = re.search(r'padding:\s*"([^"]+)"', body)
        gap = re.search(r'gap:\s*"([^"]+)"', body)
        parsed_items.append({
            "name": name,
            "dimensions": dims.group(1) if dims else None,
            "padding": padding.group(1) if padding else None,
            "gap": gap.group(1) if gap else None,
        })
    json.dump(parsed_items, out, indent=2, ensure_ascii=False)

print(f"Saved {len(elements)} element pixel specs to scratch/exact_pixel_nodes.json")
