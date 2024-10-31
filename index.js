const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer(function (request, response) {
    console.log('request', request);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    const pathToIndexHtml = path.join(__dirname, 'index.html');
    console.log(pathToIndexHtml);
    
    fs.readFile(pathToIndexHtml, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            response.statusCode = 404; 
            response.setHeader('Content-Type', 'text/plain');
            response.end('NOTHING WAS FOUND, TRY AGAIN');
            return;
        }
        response.statusCode = 200;        
        response.setHeader('Content-Type', 'text/html');
        response.end(data); 
    });
}); 

server.listen(port, hostname, () => {
    console.log('Server is listening to port:', port);
});
