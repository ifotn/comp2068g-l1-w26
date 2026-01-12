"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import http lib installed w/node
const http_1 = __importDefault(require("http"));
const axios_1 = __importDefault(require("axios"));
// create a local web server using a callback function to handle requests
http_1.default.createServer((req, res) => {
    // emit http response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    axios_1.default.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
        res.write('<h1>Sample API Data</h1>');
        res.write(`<pre>${JSON.stringify(response.data)}</pre>`);
        res.end();
    });
}).listen(4000);
console.log('Web server running on port 4000');
