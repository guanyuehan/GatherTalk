const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
  res.write("Never gonna give u up");
  res.end();
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
