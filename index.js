const { createServer } = require('http');

const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
  console.log('request', request.method);
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');
//   response.end('Hello World');

  const pathToIndexHtml = path.join(_dirname, 'index.html');
  console/log(pathToIndexHtml);
  fs.readFile(pathToIndexHtml, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.end('Sorry file not found')
      return;
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is listening to port:`, port);
});
