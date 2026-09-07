import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's print out the exact element structure from the output text tree
lines = text.split('\n')
tree_lines = []
for i, line in enumerate(lines):
    if line.strip().startswith('[FRAME]') or line.strip().startswith('[INSTANCE]') or line.strip().startswith('[RECTANGLE]') or line.strip().startswith('[TEXT]') or line.strip().startswith('[IMAGE-SVG]'):
        tree_lines.append((i+1, line))

print(f"Total nodes in Figma tree: {len(tree_lines)}")
with open('scratch/figma_exact_tree.txt', 'w', encoding='utf-8') as out:
    for num, l in tree_lines:
        out.write(f"{num}: {l}\n")

print("Saved scratch/figma_exact_tree.txt")
