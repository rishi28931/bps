const http = require('http');
const server = http.createServer((req, res) => {
    console.log("hutiya");
});
server.listen(5000);