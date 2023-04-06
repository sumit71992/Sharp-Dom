const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({ title, price, description, imageUrl });

  product
    .save()
    .then(() => {
      res.redirect("/admin/products");
      console.log("Created Product");
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.id;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};
exports.postEditProduct = async (req, res, next) => {
  try {
    const id = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDecription = req.body.description;
    await Product.findByIdAndUpdate(id, {
      title: updatedTitle,
      price: updatedPrice,
      description: updatedDecription,
      imageUrl: updatedImageUrl,
    });
    res.redirect('/admin/products');
    console.log("Product updated");
  } catch (err) {
    console.log(err);
  }
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/admin/products");
      console.log("Product removed");
    })
    .catch((err) => console.log(err));
};
