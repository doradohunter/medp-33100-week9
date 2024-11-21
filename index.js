const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const pathToIndexHtml = path.join(__dirname, 'index.html');
    console.log('path', pathToIndexHtml);

    fs.readFile(pathToIndexHtml, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Sorry, file not found.");
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
