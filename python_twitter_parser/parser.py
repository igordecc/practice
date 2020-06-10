import tweet_parser
import requests

url = "https://twitter.com/search?q=lupomontero&src=typed_query"


_string = requests.get(url).text
import bs4
soup_data = bs4.BeautifulSoup(_string)
print(soup_data)
