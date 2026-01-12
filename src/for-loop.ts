import http from 'http';

http.createServer((req: http.IncomingMessage, res: http.ServerResponse) =>  {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    for (let i: number = 1; i <= 20; i++) {
        res.write(i + '<br />');

        console.log(i);
    }

    res.end();

}).listen(4000);