path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
for i, line in enumerate(lines):
    if '7006:1751' in line or 'div.row' in line:
        l = line.encode('ascii', errors='replace').decode('ascii')
        print(f"{i+1}: {l}")
        for j in range(i, min(len(lines), i+15)):
            l2 = lines[j].encode('ascii', errors='replace').decode('ascii')
            print(f"  {j+1}: {l2}")
        break
