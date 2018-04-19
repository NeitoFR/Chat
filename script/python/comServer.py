import urllib.request
import urllib.parse

url = 'http://127.0.0.1:3000/test'
data = {'test' : 'Bonjour'}
data = urllib.parse.urlencode(data)
data = data.encode('utf-8')
req = urllib.request.Request(url, data)
resp = urllib.request.urlopen(req)
respData = resp.read()

print(respData)

