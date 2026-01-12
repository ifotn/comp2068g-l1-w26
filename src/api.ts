// import http lib installed w/node
import http from 'http';
import axios from 'axios';

// create a local web server using a callback function to handle requests
http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // emit http response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        res.write('<h1>Sample API Data</h1>');
        res.write(`<pre>${JSON.stringify(response.data)}</pre>`);
        res.end();
    });    
}).listen(4000);

console.log('Web server running on port 4000');