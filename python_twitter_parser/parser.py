import tweet_parser
import requests
import bs4

def main():

    url = "https://twitter.com/NoogyTweet"
    ses = requests.Session()
    _string = ses.get(url, stream=True).text
    soup_data = bs4.BeautifulSoup(_string, "html.parser")

    # print(soup_data.prettify())

    # get 107383619.json
    ses.auth = (u"authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA")

    url = "https://api.twitter.com/2/timeline/profile/107383619.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&send_error_codes=true&simple_quoted_tweet=true&include_tweet_replies=false&userId=107383619&count=20&ext=mediaStats%2ChighlightedLabel&include_quote_count=true"
    _dict = {"authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "Referer": "https://twitter.com/noogytweet",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",
    "x-csrf-token": "2168a15acb9f25023859d3b90fc00c3d",
    "x-guest-token": "1271005569420333056",
    "x-twitter-active-user": "yes",
    "x-twitter-client-language": "en"}


    r = ses.request("GET", url, headers=_dict,auth=("authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"))
    print( r.text)
    print( r.reason)
    print( r.content)

def test1():
    url = "https://httpbin.org/get"
    ses = requests.Session()
    r = ses.get(url)
    # print(r.text)

def test2(inurl=None):
    if not inurl:
        url = "https://twitter.com/NoogyTweet"
    else:
        url=inurl
    ses = requests.Session()
    r = ses.get(url)
    soup_data = bs4.BeautifulSoup(r.text, "html.parser")
    # print(soup_data.prettify())
    return soup_data


if __name__ == '__main__':
    r = test2("https://abs.twimg.com/responsive-web/web/main.0c5d9394.js")
    # r = test2("https://ton.twitter.com/responsive-web-internal/sourcemaps/web/main.0c5d9394.js.map")
    print(r.prettify())
    print(r.find("AAAAA"))
    # main()