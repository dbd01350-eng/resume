import re
import json

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract all element blocks and their exact attributes
element_blocks = re.findall(r'(\[FRAME\]\s*"([^"]+)"[^\n]*\n([\s\S]*?)(?=\n\s*\[FRAME\]|\n\s*\[INSTANCE\]|\n\s*\[RECTANGLE\]|\n\s*\[TEXT\]|$))', text)

print(f"Total element blocks: {len(element_blocks)}")

audit_report = []

for full, name, body in element_blocks:
    bg = re.search(r'fills=\[?([^\]\n]+)\]?', body)
    stroke = re.search(r'strokes=\[?([^\]\n]+)\]?', body)
    radius = re.search(r'borderRadius=([^\n]+)', body)
    padding = re.search(r'padding:\s*"([^"]+)"', body)
    gap = re.search(r'gap:\s*"([^"]+)"', body)
    dims = re.search(r'dimensions:\s*\{([^}]+)\}', body)
    
    audit_report.append({
        "node_name": name,
        "bg": bg.group(1).strip() if bg else None,
        "stroke": stroke.group(1).strip() if stroke else None,
        "radius": radius.group(1).strip() if radius else None,
        "padding": padding.group(1).strip() if padding else None,
        "gap": gap.group(1).strip() if gap else None,
        "dims": dims.group(1).strip() if dims else None,
    })

with open('scratch/figma_audit_report.json', 'w', encoding='utf-8') as out:
    json.dump(audit_report, out, indent=2, ensure_ascii=False)

print("Saved scratch/figma_audit_report.json")
