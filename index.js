const http = require('http');
const hostname = 'localhost';
const port = process.env.PORT || 8000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(
`<html>
<head><title>Operating System Info</title></head>
<body><h1>Operating System Info</h1>
</body></html>
`);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
