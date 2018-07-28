import websocket
ws = websocket.create_connection("wss://www.keybr.com/game?u=q1x38jw")
while 1:
    print(ws.recv())