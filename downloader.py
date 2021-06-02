import requests
import wget
import json
import threading

latest = requests.get('https://xkcd.com/info.0.json')

latest_json = latest.json()

latest_num = latest_json['num']

print("Latest comic number is: ", latest_num)

infodata = {}


def download(start, end):
    infodata = {}
    for num in range(start, end, -1):
        comic = requests.get('https://xkcd.com/' + str(num) + '/info.0.json')
        comicjson = comic.json()

        infodata[str(num)] = {'title': comicjson['safe_title'],
                            'alt': comicjson['alt']}

        wget.download(comicjson['img'], 'images/' + str(num) + '.png')

        print("\nGetting image #{} \nUrl: {}".format(
            comicjson['num'], comicjson['img']))


quater = latest_num // 4

f1 = threading.Thread(target = download, args = (latest_num, quater * 3, ))
f2 = threading.Thread(target = download, args = (quater * 3, quater * 2, ))
f3 = threading.Thread(target = download, args = (quater * 2, quater * 1, ))
f4 = threading.Thread(target = download, args = (quater * 1, 0, ))

f1.start()
f2.start()
f3.start()
f4.start()

with open('data.json', 'w') as f:
    f.write(json.dumps(infodata))
