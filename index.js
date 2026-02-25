const http = require("http");

function sum(a, b) {
  return a + b;
}

const server = http.createServer((req, res) => {
  const result = sum(5, 10);
  res.write("Sum is: " + result);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});