import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'text="([^"]+)"', text)
with open('scratch/all_texts.txt', 'w', encoding='utf-8') as out:
    for i, m in enumerate(matches):
        out.write(f"{i+1}: {m}\n")

print(f"Saved {len(matches)} text lines to scratch/all_texts.txt")
