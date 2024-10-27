const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8000;
const server = createServer(function(request, response){
    const pathToHTML = path.join(__dirname, 'index.html');
    fs.readFile(pathToHTML, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end("Sorry! I can't seem to find your file :(")
        return;
    }
    
    response.statusCode = 200; 
    response.setHeader('Content-Type', 'text/html');
    response.end(data);
    });

});

server.listen(port, hostname, ()=>{
    console.log('Server is listening to port:', port);
});