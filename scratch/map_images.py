import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')

current_node = ""
results = []

for i, line in enumerate(lines):
    if line.strip().startswith('[FRAME]') or line.strip().startswith('[INSTANCE]') or line.strip().startswith('[RECTANGLE]') or line.strip().startswith('EL-'):
        current_node = line.strip()
    if 'imageRef' in line:
        ref_match = re.search(r'"imageRef"\s*:\s*"([a-zA-Z0-9]+)"|imageRef:\s*([a-zA-Z0-9]+)', line)
        if ref_match:
            ref = ref_match.group(1) or ref_match.group(2)
            results.append((i+1, current_node, ref, line[:120]))

print(f"Found {len(results)} image nodes:")
with open('scratch/all_image_nodes.txt', 'w', encoding='utf-8') as out:
    for line_num, node, ref, snippet in results:
        out.write(f"Line {line_num} | Ref: {ref} | Node: {node} | Snippet: {snippet}\n")

print("Saved scratch/all_image_nodes.txt")
