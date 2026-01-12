"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// instantiate new express application
const app = (0, express_1.default)();
// set up middleware to handle & route http req / res
const hello = (req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
};
// url dispatching
app.use(hello);
app.listen(4000);
console.log('Express running on port 4000');
