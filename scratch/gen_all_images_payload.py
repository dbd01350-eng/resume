import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find all node IDs and imageRefs
matches = re.findall(r'#([I0-9:;-]+)[\s\S]*?"imageRef"\s*:\s*"([a-zA-Z0-9]+)"|#([I0-9:;-]+)[\s\S]*?imageRef:\s*([a-zA-Z0-9]+)', text)

nodes = []
seen = set()

for m1, r1, m2, r2 in matches:
    node_id = m1 or m2
    ref = r1 or r2
    if ref and ref not in seen:
        seen.add(ref)
        nodes.append({
            "nodeId": node_id if node_id else "7006:1284",
            "fileName": f"figma_{ref[:8]}.png",
            "imageRef": ref
        })

print(f"Total imageRefs to download: {len(nodes)}")
with open('scratch/all_figma_images.json', 'w', encoding='utf-8') as out:
    json.dump(nodes, out, indent=2)

print("Saved scratch/all_figma_images.json")
