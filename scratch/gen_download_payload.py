import re
import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')

nodes_to_download = []
current_node_id = ""
current_node_name = ""

for i, line in enumerate(lines):
    if line.strip().startswith('[FRAME]') or line.strip().startswith('[INSTANCE]') or line.strip().startswith('[RECTANGLE]'):
        node_id_match = re.search(r'#([I0-9:;-]+)', line)
        if node_id_match:
            current_node_id = node_id_match.group(1)
        name_match = re.search(r'\[(?:FRAME|INSTANCE|RECTANGLE)\]\s*"([^"]+)"', line)
        if name_match:
            current_node_name = name_match.group(1)

    if 'imageRef' in line:
        ref_match = re.search(r'"imageRef"\s*:\s*"([a-zA-Z0-9]+)"|imageRef:\s*([a-zA-Z0-9]+)', line)
        if ref_match:
            ref = ref_match.group(1) or ref_match.group(2)
            # generate clean filename
            clean_name = re.sub(r'[^a-zA-Z0-9_]', '_', current_node_name).lower()
            if not clean_name or clean_name == '_':
                clean_name = 'img'
            file_name = f"{clean_name}_{ref[:6]}.png"
            nodes_to_download.append({
                "nodeId": current_node_id,
                "fileName": file_name,
                "imageRef": ref
            })

# Deduplicate by nodeId and fileName
unique_nodes = []
seen = set()
for n in nodes_to_download:
    key = (n["nodeId"], n["fileName"])
    if key not in seen and n["nodeId"]:
        seen.add(key)
        unique_nodes.append(n)

print(f"Total unique nodes to download: {len(unique_nodes)}")

with open('scratch/nodes_to_download.json', 'w', encoding='utf-8') as out:
    json.dump(unique_nodes, out, indent=2, ensure_ascii=False)

print("Saved scratch/nodes_to_download.json")
