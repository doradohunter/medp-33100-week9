const { createServer } = require('node:http');

const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'; 
const port = 3000;

const server = createServer((req, res) => { 

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const pathToIndexHtml = path.join(__dirname, 'index.html');
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

server.listen(port, hostname, () => {
    console.log('Server is listening to port:', port)
});

