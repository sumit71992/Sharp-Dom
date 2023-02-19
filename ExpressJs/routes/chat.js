const express = require("express");
const fs = require('fs');
const router = express.Router();
const {LocalStorage} = require('node-localstorage');
let localStorage = new LocalStorage('./scratch')
router.get('/login',(req,res,next)=>{
    res.send('<form action="/login" method="POST"><input type="text" name="username"><div><button type="submit">Login</button></div></form>')
});
router.post('/login',(req,res,next)=>{
    localStorage.setItem('username', req.body.username);
    res.redirect('/chat');
});
router.post('/chat',(req,res,next)=>{
    let prev = fs.readFileSync('./chat.txt', 'utf-8');
    fs.writeFileSync("chat.txt",prev+" "+localStorage.getItem('username')+":" +" "+ req.body.chat);
    res.redirect('/chat');
})
router.get('/chat',(req,res,next)=>{
    let chat = fs.readFileSync('./chat.txt', 'utf-8');
    res.send(`<div>${chat}</div><form action="/chat" method="POST"><input type="text" name="chat"><div><button type="submit">Send</button></div></form>`);
});
module.exports=router;