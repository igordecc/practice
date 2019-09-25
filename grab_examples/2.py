from grab import Grab
import urllib.request
g = Grab(log_file='out.request.html')
#g.go('old.reactor.cc')
#contents = urllib.request.urlopen("http://old.reactor.cc/post/comments/3547868")
content = g.go('http://old.reactor.cc/post/comments/3547868')
with open("my_page.log.html", "wb") as file:
    file.write(content.body)

#TODO разобраться как
#TODO 1. парсить
#TODO 2. загружать фотки