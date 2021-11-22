//imports
const express = require('express');
const app = express();
const port ='5500';

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));


app.get('', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html')
})


app.listen(port, () => console.info(`Listening on Port ${port}`))

/*
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port ='5500';



fs.readFile('index.html', (err, html) => {
    if(err) throw err;

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    
    server.listen(port, hostname, () => {
        console.log('Server started on port: ' + port);
    });
});*/

