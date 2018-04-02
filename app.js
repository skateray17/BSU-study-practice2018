const http = require('http');
const fs = require('fs');

const port = 3000;

const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./public/UI/index.html').pipe(res);
  } else {
    if (req.url.startsWith('/public/')) {
      if (fs.existsSync(__dirname + req.url)) {
        fs.createReadStream(__dirname + req.url).pipe(res);
      } else {
        console.log(req.url);
        res.statusCode = 404;
        res.end();
      }
    } else {
      res.statusCode = 403;
      res.end();
    }
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
