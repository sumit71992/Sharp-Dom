const path = require('path');
const root = require('../util/path');


exports.contactUs = (req,res,next)=>{
    res.sendFile(path.join(root,'views','contactus.html'));
};
exports.successMessage = (req,res)=>{
    res.sendFile(path.join(root,'views','success.html')); 
};