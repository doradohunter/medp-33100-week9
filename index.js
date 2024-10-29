// 1. Import the http library
const { createServer } = require('http'); 

const fs = require('fs');
const path = require('path');

//2. Set the hostname and the port 
const hostname = '127.0.0.1' // = localhost:3000
const port = 3000;

//3. Create a new server with createServer() from http
const server = createServer( function (request, response) { //always put request, response *dont mess up the order*
    console.log('request', request.method);
    // //4. Have your server return a response with a 200 status code 
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain')
    // response.end('Hello world!'); 
    
    //6. Have your server return a HTML page with a 200 status code
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    const pathToIndexHtml = path.join(__dirname, 'index.html'); //)__dirname gets the whole directory 
    fs.readFile(pathToIndexHtml, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          response.statusCode = 404;
          response.setHeader('Content-Type', 'text/plain');
          response.end('Sorry, file not found.'); 
          return;
        }

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(data);

      });
});

//5. Set the server to listen to the port
server.listen(port, hostname, () => {
    console.log('Server is listening to port:', port)
})

//put http://127.0.0.1:3000 in search bar to see 
//use CTRL+C to restart server 