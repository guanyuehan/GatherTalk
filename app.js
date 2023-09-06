const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      fs.readFile("./public/index.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.setHeader("Content-Type", "text/html");
          res.write(data);
          res.end();
        }
      });
      break;
    case "/about":
      res.write("About us");
      res.end();
      break;
    case "/contact":
      res.write("Contact us");
      res.end();
      break;
    default:
      res.write("404 not found");
      res.end();
  }
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
