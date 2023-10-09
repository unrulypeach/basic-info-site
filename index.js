const http = require('http');
const fs = require('fs/promises');
const fscall = require('fs');
const url = require('url');

http.createServer(async function(req, res) {
  const url = new URL(`http://${req.headers.host}${req.url}`);

  const filename = "." + url.pathname + '.html';
  const errorfile = await fs.readFile('404.html', 'utf8');
  try {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (url.pathname === '/') {
      const data = await fs.readFile('index.html', 'utf8');
      res.write(data)
      res.end();
    }
    const data = await fs.readFile(filename, 'utf8');
    res.write(data);
    res.end();
  } catch(err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end(errorfile)
  }
}).listen(8080);