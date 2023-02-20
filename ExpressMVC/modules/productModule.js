const fs = require("fs");
const path = require("path");
module.exports = class Product {
  constructor(name) {
    this.title = name;
  }
  save() {
    const location = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(location, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(location, JSON.stringify(products), (err) => {
        if(err){
            console.log("err",err);
        }
      });
    });
  }
  static fetchAll(cb) {
    const location = path.join(
        path.dirname(process.mainModule.filename),
        "data",
        "products.json"
      );
      fs.readFile(location, (err, data)=>{
        if(err){
            cb([]);
        }
        cb(JSON.parse(data));
      });
  }
};
