import asyncio
import websockets

async def hello():
    uri = "ws://localhost:1234"
    async with websockets.connect(uri) as websocket:
        for i in range(10):
            await websocket.send(str(i))
            await websocket.recv()

asyncio.get_event_loop().run_until_complete(hello())