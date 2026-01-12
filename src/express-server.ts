import express, { Request, Response, NextFunction } from 'express';

// instantiate new express application
const app: any = express();

// set up middleware to handle & route http req / res
const hello = (req: Request, res: Response): void => {
    res.status(200).send('<h1>Hello World</h1>');
};

// url dispatching
app.use(hello);

app.listen(4000);
console.log('Express running on port 4000');