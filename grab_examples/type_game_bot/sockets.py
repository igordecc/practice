import websocket
ws = websocket.create_connection("wss://www.keybr.com/game?u=q1x38jw")
print(ws.sock)
while 1:
    print(ws.recv())