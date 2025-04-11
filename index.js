const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Xin chào từ Azure App Service!\n');
});
server.listen(process.env.PORT || 3000);