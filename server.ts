// import http lib installed w/node
import http from 'http';

// create a local web server using a callback function to handle requests
http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // emit http response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
}).listen(4000);

console.log('Web server running on port 4000');