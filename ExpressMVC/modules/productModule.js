const fs = require("fs");
const path = require("path");

const getProductFromFile = (cb) => {
  const location = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
  fs.readFile(location, (err, data) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(name) {
    this.title = name;
  }
  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(location, JSON.stringify(products), (err) => {
        if (err) {
          console.log("err", err);
        }
      });
    });
  }
  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
