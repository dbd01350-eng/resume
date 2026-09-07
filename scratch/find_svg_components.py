import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
svg_nodes = []

for i, line in enumerate(lines):
    if 'IMAGE-SVG' in line:
        node_match = re.search(r'#([I0-9:;-]+)', line)
        comp_match = re.search(r'componentId=([0-9:]+)', line)
        node_id = node_match.group(1) if node_match else None
        comp_id = comp_match.group(1) if comp_match else None
        svg_nodes.append((i+1, line.strip(), node_id, comp_id))

print(f"Total IMAGE-SVG nodes found: {len(svg_nodes)}")
for lnum, line, nid, cid in svg_nodes:
    print(f"Line {lnum} | NodeId: {nid} | CompId: {cid} | Line: {line[:80]}")
