const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    let target = {};
    let proxy = new Proxy(target, {});
    proxy.test = 5;
    
    console.log(target.test);
    console.log(proxy.test);
    
    for(let key in proxy) console.log(key);

  console.log(`Server running at http://${hostname}:${port}/`);
});