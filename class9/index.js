// 1. Import the http library
const { createServer } = require('node:http');

const fs = require('fs');   //filesystem - accessing files (all the files are async/await)
const path = require('path');   // helpers to work with files

// 2. Set the hostname and the port
const hostname = '127.0.0.1'; //development ip address (= local host)
const port = 3000; //localhost:3000

// 3. Create a new server with createServer() from http
const server = createServer((req, res) => { //turns your computer to a http server
    console.log('request', req.method)
    // 4. Have your server return a response with a 200 status code
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');
    
    // 6. Have your server return an HTML page with a 200 status code
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const pathToIndexHtml = path.join(__dirname, 'index.html');
    // console.log('path', pathToIndexHtml)
    fs.readFile(pathToIndexHtml, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Sorry file not found');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

// 5. Set the server to listen to the port
server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Server is listening to port:', port)
});
