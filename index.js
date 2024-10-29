const { createServer } = require('http')
const fs = require('fs')
const path = require('path')
const hostname ='127.0.0.1'
//address http://127.0.0.1:3000/
const port = 3000;
const pathToIndex = path.join(__dirname, 'index.html')
const server = createServer(function (request, response){
    fs.readFile(pathToIndex, 'utf-8', (err, data) => {
        if (err){
            console.error(err)
            return;
        }
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        response.end(data)
    })
})
server.listen(port, hostname, () => {
    console.log('server is listening to port: ', port)
})