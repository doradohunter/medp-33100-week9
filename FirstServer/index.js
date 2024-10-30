const { createServer } = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const path = require('path');


const server = createServer((request,response) => {
    // console.log('request', request);
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain');
    // response.end('Well hello there');
    console.log('request', request);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    const pathtoIndex = path.join(__dirname, 'index.html');
    fs.readFile(pathtoIndex, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          response.statusCode = 404;
          response.setHeader('Content-Type', 'text/plain')
          response.end('File not found')
          return;
        }
        console.log(data);

        response.statusCode = 200;
        response.end(data)
      });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });