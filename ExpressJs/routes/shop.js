const path = require('path');
const root = require('../util/path');
const express = require("express");

const router = express.Router();

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(root,'views','contactus.html'));
});
router.post('/success',(req,res)=>{
    res.sendFile(path.join(root,'views','success.html'));
    
})
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(root,'views','shop.html'));
})
module.exports=router;