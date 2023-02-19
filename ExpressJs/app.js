const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const chatRoutes = require('./routes/chat');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);
app.use(chatRoutes);
// 404 error page
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});


app.listen(port);