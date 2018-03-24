const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (req, res) => {
  if(req.url === '/'){ 
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./public/UI/index.html').pipe(res);
  } else {
    let tmp = req.url.match(/\/public\/.*\.js/);
    if(tmp && tmp[0]===req.url){
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      fs.createReadStream(__dirname + req.url).pipe(res);
    } else {
      tmp = req.url.match(/\/public\/.*\.css/);
      if(tmp && tmp[0]===req.url){
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.createReadStream(__dirname + req.url).pipe(res);
      } else {
        tmp = req.url.match(/\/public\/.*\.png/);
        if(tmp && tmp[0]===req.url){
          res.writeHead(200, {'Content-Type': 'image/png'});
          fs.createReadStream(__dirname + req.url).pipe(res);
        } else {
          res.end(404);
        } 
      }
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
