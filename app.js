const http = require("http");


const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'})
  res.end();
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
