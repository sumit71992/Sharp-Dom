const http = require('http');
const express = require('express');
const port = 3000;

const app = express();

app.use((req,res,next)=>{
   
    next();
});

app.use((req,res,next)=>{
    res.send( { key1: "value" });
});

const server = http.createServer(app);
server.listen(port);