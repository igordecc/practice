import requests
from lxml.etree import ElementTree, HTMLParser
import io
import logging
import json

logging.basicConfig(level="INFO")


class FilePursuit:
    base_url = "https://filepursuit.com"

    def __init__(self):
        self.sess = requests.Session()
        self.sess.get(self.base_url)  # get initial cookies

    def page(self, start_row=None):
        params = {"startrow": start_row} if start_row is not None else {}
        res = self.sess.get(
            self.base_url + "/discover.php",
            params=params,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"
            })
        tree = ElementTree(file=io.BytesIO(res.content), parser=HTMLParser()).getroot()

        return [el.get("href").split("=", 1)[1] for el in tree.cssselect("a[href^='discover.php?link']")]

    def discover(self, stop_after=None):
        results = self.page()

        while True:
            next = self.page(len(results))
            logging.info("Found {} more pages ({} total)".format(len(next), len(results)))
            if not next or (stop_after is not None and len(results) >= stop_after):
                break
            results.extend(next)

        return results


fp = FilePursuit()
links = fp.discover(1000)

with open("fp-links.json", "w") as f:
    json.dump(links, f)