const http = require('http');
const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('Hello from node server');
    } else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('About us is here');
    }

});


server.listen(5000, () => {
    console.log("Server running on port 5000");
});













