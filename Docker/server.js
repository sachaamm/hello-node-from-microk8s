const http = require('http');

const hostname = '0.0.0.0'; // Accept all ip
let port = 3005;

let parsePortFromNode = parseInt(process.env.NODE_PORT);

if(!isNaN(parsePortFromNode)){
    port = parsePortFromNode; // Inject port from config
}

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})