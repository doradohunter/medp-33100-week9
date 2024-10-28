// Import the HTTP module
const http = require('http');

// Define the server and the response
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Halloween themed HTML content
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Halloween Spooktacular 🎃</title>
      <style>
        body {
          background-color: black;
          color: orange;
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
        }
        h1 {
          font-size: 3em;
        }
        p {
          font-size: 1.5em;
        }
        .pumpkin {
          font-size: 5em;
        }
      </style>
    </head>
    <body>
      <div class="pumpkin">🎃</div>
      <h1>Welcome to the Halloween Spooktacular!</h1>
      <p>Beware... things go bump in the night 👻</p>
    </body>
    </html>
  `);
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
