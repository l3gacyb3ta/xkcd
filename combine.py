import json

data = {}

with open('data617.json', 'r') as f:
    ndat = json.load(f)
    data = {**data, **ndat}

with open('data1234.json', 'r') as f:
    ndat = json.load(f)
    data = {**data, **ndat}

with open('data1851.json', 'r') as f:
    ndat = json.load(f)
    data = {**data, **ndat}

with open('data2470.json', 'r') as f:
    ndat = json.load(f)
    data = {**data, **ndat}

with open('data.json', 'w') as f:
    json.dump(data, f)
