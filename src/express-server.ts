import express, { Request, Response, NextFunction } from 'express';

// instantiate new express application
const app: any = express();

// set up middleware to handle & route http req / res
const hello = (req: Request, res: Response): void => {
    res.status(200).send('<h1>Hello Express</h1>');
};

const goodbye = (req: Request, res: Response): void => {
    res.status(200).send('<h1>Goodbye Express</h1>');
};

const home = (req: Request, res: Response): void => {
    if (req.path === '/') {
        res.status(200).send('<h1>Home</h1>');
    }
    else {
        res.status(404).send('<h1>Not Found</h1>');
    }
}

// url dispatching
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/', home);

app.listen(4000);
console.log('Express running on port 4000');