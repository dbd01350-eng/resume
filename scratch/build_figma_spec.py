import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search for all text styles, sizes, lineHeights, colors
font_styles = re.findall(r'(fontFamily:[^\n]+\n(?:  [^\n]+\n)+)', text)
print(f"Font styles count: {len(font_styles)}")
for fs in set(font_styles):
    print("--- Font Style ---")
    print(fs)
