const http = require('http');
const port = 4000;

const rqListener = (req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Node Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        return res.end();
        
    }
    if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>Node Page</title></head>');
        res.write('<body><h1> Welcome to About Us page</h1></body>');
        res.write('</html>');
        return res.end();
        
    }
    if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        return res.end();
       
    }else{
    res.write('<html>');
    res.write('<head><title>Node Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
    }
}
const server = http.createServer(rqListener);
server.listen(port);