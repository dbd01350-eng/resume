import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's parse global vars and styles
vars_match = re.search(r'GLOBAL_VARS:([\s\S]*?)ELEMENTS:', text)
if vars_match:
    print("=== GLOBAL VARS & STYLES ===")
    print(vars_match.group(1)[:3000])
