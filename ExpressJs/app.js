const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');

});
app.post('/product',(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello Express!</h1>');
});

app.listen(port);