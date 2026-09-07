import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find all occurrences of imageRef or fill or image in the raw text
refs = re.findall(r'"imageRef"\s*:\s*"([a-zA-Z0-9]+)"|imageRef:\s*([a-zA-Z0-9]+)', text)
clean_refs = []
for r1, r2 in refs:
    clean_refs.append(r1 or r2)

print(f"Total imageRef found in raw text: {len(clean_refs)}")
unique_refs = list(set(clean_refs))
print("Unique imageRefs:", len(unique_refs))
for u in unique_refs:
    print(" -", u)
