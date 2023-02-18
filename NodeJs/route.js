const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        try {
            const msg = fs.readFileSync('./message.txt', 'utf8');
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><p>${msg}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        }catch(err){
            console.error(err)
        }    
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });

        });
    }
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

    }
    res.write('<html>');
    res.write('<head><title>Node Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
}
//module.exports = requesHandler;
//module.routes = requestHandler;
module.exports ={
    routes:requestHandler,
};
