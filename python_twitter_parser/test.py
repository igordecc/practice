import requests

def test1():
    url = "https://httpbin.org/get"
    ses = requests.Session()
    r = ses.get(url)
    print(r.text)
