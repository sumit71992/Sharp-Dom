const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);
module.exports = class Cart {
  static addProductToCart(id,price) {
    //fetch the previous cart
    fs.readFile(p, (err, data) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(data); 
      }
      //Analyze the cart ie find existing product
      const existingProductIndex = cart.products.findIndex((prod=>prod.id===id));
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      //add or increase the product to cart
      if(existingProduct){
        updatedProduct = {...existingProduct};
       
        updatedProduct.qty = updatedProduct.qty + 1;
       
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      }else{
        updatedProduct = {id:id,qty:1};
        cart.products = [...cart.products, updatedProduct]
      }
      cart.totalPrice += Number(price);
      fs.writeFile(p, JSON.stringify(cart),err=>{
        if(err){
            console.log(err);
        }
      })
    }); 
  }
};
