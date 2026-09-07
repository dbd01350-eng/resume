import re

path = r"C:\Users\PC\.gemini\antigravity-cli\brain\a0e98eb7-fa25-4e7a-b644-7103fa33cfa8\.system_generated\steps\16\output.txt"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Search for StatisticsCard-IKEA block
ikea_block = text[text.find('StatisticsCard-IKEA'):text.find('StatisticsCard-Tools')]

print(ikea_block)
