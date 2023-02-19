const path = require('path');
const root = require('../util/path');



exports.getProducts = (req,res,next)=>{
    res.sendFile(path.join(root,'views','shop.html'));
};
exports.postProducts = (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect("/");
};
exports.getAddProducts = (req, res, next) => {
    res.sendFile(path.join(root,"views","add-product.html"));
}