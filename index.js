const http = require('http');
const util = require('util');
const url  = require('url');
const os   = require('os');
var cool = require('cool-ascii-faces');
const hostname = '0.0.0.0';
const port = process.env.PORT || 8000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end(
`<html>
<head><title>Operating System Info</title></head>
<body><h1>Operating System Info</h1>
${cool()}<br/><br/>
<table>
<tr><th>TMP Dir</th><td>${os.tmpDir()}</td></tr>
<tr><th>Host Name</th><td><b>${os.hostname()}</b></td></tr>
<tr><th>OS Type</th><td>${os.type()} ${os.platform()} ${os.arch()} ${os.release()}</td></tr>
<tr><th>Uptime</th><td>${os.uptime()} ${util.inspect(os.loadavg())}</ td></tr>
<tr><th>Memory</th><td>total: ${os.totalmem()} free: ${os.freemem()}</ td></tr>
<tr><th>CPU's</th><td><pre>${util.inspect(os.cpus())}</pre></td></tr>
<tr><th>Network</th><td><pre>${util.inspect(os.networkInterfaces())}</ pre></td></tr>
</table>
</body></html>
`);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
