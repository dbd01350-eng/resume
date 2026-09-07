path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
for i, line in enumerate(lines):
    if 'marquee' in line.lower() or 'showcase' in line.lower() or '160ee5b8' in line or '22f5bbb1' in line:
        l = line.encode('ascii', errors='replace').decode('ascii')
        print(f"{i+1}: {l}")
