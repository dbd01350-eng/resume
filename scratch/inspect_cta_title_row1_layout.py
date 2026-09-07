path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
for i, line in enumerate(lines):
    if 'layout_c686e931' in line:
        print(f"Match at line {i+1}:")
        for j in range(max(0, i-2), min(len(lines), i+10)):
            l = lines[j].encode('ascii', errors='replace').decode('ascii')
            print(f"{j+1}: {l}")
        break
