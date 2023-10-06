// 5. Create a server that returns the html page for different url's.
const http = require('http');
const fs = require('fs');
const savedValue = fs.readFileSync('port.txt', 'utf8');
const port = savedValue;
fs.writeFileSync('port.txt', parseInt(port) + 1);

const hostname='127.0.0.1';
const text=fs.readFileSync('home.html');
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
  
    if(req.url=="/home.html"|| req.url=="/"){
        res.end(text);
    }else if(req.url=="/about.html"){
        res.end(fs.readFileSync('about.html'));
    }else if(req.url=="/contact.html"){
        res.end(fs.readFileSync('contact.html'));
    }else if(req.url=="/gallery.html"){
        res.end(fs.readFileSync('gallery.html'));
    }else if(req.url=="/index.html"){
        res.end(fs.readFileSync('index.html'));
    }else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})