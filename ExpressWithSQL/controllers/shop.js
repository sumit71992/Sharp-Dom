const Product = require("../models/product");
const Cart = require("../models/cart");
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.id;
  Product.findAll({ where: { id: prodId } })
    .then((product) => {
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts()
        .then((products) => {
          res.render("shop/cart", {
            path: "/cart",
            pageTitle: "Your Cart",
            products,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
exports.postCart = (req, res, next) => {
  const pid = req.body.productName;
  let fetchedCart;
  let newQty = 1;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: pid } });
    })
    .then((products) => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      if (product) {
        console.log(product)
       const oldQty = product.cartitem.quantity;
        newQty = oldQty+1;
        return product;
      }
      return Product.findByPk(pid);
    })   
    .then(product=>{
      return fetchedCart.addProduct(product, {
        through: { quantity: newQty },
      });
    })
    .then(()=>{
      res.redirect("/cart")
    })
    .catch((err) => console.log(err));
};

exports.postCartDeleteProduct=(req,res,next)=>{
  const pid = req.params.id;
  req.user.getCart().then(cart=>{
return cart.getProducts({where:{id:pid}});
  })
  .then(products=>{
    const product = products[0];
    console.log("product", product)
    return product.cartitem.destroy();
  })
  .then(result=>{
    return res.redirect("/cart");
  }).catch(err=>console.log(err));
}

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
