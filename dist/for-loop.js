"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    for (let i = 1; i <= 20; i++) {
        res.write(i + '<br />');
        console.log(i);
    }
    res.end();
}).listen(4000);
