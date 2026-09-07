import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')

image_nodes = []
current_node = ""

for i, line in enumerate(lines):
    if line.strip().startswith('[FRAME]') or line.strip().startswith('[INSTANCE]') or line.strip().startswith('[RECTANGLE]'):
        current_node = line.strip()
    if 'imageRef' in line:
        ref = re.search(r'imageRef:\s*([a-zA-Z0-9]+)', line)
        if ref:
            node_id_match = re.search(r'#([I0-9:;-]+)', current_node)
            node_id = node_id_match.group(1) if node_id_match else "unknown"
            image_nodes.append((node_id, current_node, ref.group(1), i+1))

print(f"Total imageRef occurrences: {len(image_nodes)}")
for node_id, current_node, ref, line_num in image_nodes:
    print(f"Line {line_num} | NodeId: {node_id} | Ref: {ref} | Node: {current_node[:80]}")
