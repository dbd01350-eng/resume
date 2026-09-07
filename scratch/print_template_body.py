path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
for i in range(795, 860):
    l = lines[i].encode('ascii', errors='replace').decode('ascii')
    print(f"{i+1}: {l}")
