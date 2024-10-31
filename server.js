const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>🎃 Halloween Page 🎃</title>
            <style>
                body { background-color: black; color: orange; text-align: center; font-family: Arial, sans-serif; }
                h1 { font-size: 3em; margin-top: 20%; }
                p { font-size: 1.2em; }
            </style>
        </head>
        <body>
            <h1>🎃 Happy Halloween! 🎃</h1>
            <p>Enjoy the spooky vibes and treats!</p>
        </body>
        </html>
    `);
});
