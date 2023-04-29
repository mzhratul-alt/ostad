const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.exists('./public/idex.html', function (result) {
            if (result) {
                fs.readFile('./public/index.html', function (error, data) {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data);
                    return res.end();
                });
            } else {
                fs.readFile('./public/404.html', function (error, data) {
                    res.writeHead(404, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data);
                    return res.end();
                });
            }
        })
    } else {
        fs.readFile('./public/404.html', function (error, data) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            return res.end();
        });
    }
    console.log('Server Running...')
});


server.listen(3000, '127.0.0.1', () => {
    console.log('Server Running at http://127.0.0.1:3000');
})