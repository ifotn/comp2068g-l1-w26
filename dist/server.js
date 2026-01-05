"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import http lib installed w/node
const http_1 = __importDefault(require("http"));
// create a local web server using a callback function to handle requests
http_1.default.createServer((req, res) => {
    // emit http response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
}).listen(4000);
console.log('Web server running on port 4000');
