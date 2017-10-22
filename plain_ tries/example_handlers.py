from sys import stderr

def broadcastCreatedResponse(message):
    print('Было создано лобби...')

def listCreatedResponse(message):
    print('Получен список лобби...')

def broadcastStartedResponse(message):
    print('Игра запущена и убрана из списка...')

def createResponse(message):
    print('Я создал лобби...',message['object'])

def removeResponse(message):
    print('Я ливнул из игры...')

def startedResponse(message):
    print('Я зашёл в игру...')

def gameChangedResponse(message):
    print('Состояние игры изменилось...')

def messageResponse(message):
    print('Пришло сообщение...')

def errorResponse(message):
    print('ПРОИЗОШЛА ОШИБКА...',file=stderr)

def winResponse(message):
    print('ПОБЕДИТЕЛЬ...',file=stderr)

def lossResponse(message):
    print('Повезёт в другой раз...',file=stderr)

handlers = dict(filter(lambda v: type(v[1]) == type(lambda x: print(x)),
                       globals().items()))
