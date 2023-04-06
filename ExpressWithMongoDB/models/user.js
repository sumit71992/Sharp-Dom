const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});
userSchema.methods.addToCart = function (product) {
  const cartIndex = this.cart.items.findIndex((cp) => {
    return cp.productId.toString() == product._id.toString();
  });
  let newQuantity = 1;
  let updatedItems = [...this.cart.items];
  if (cartIndex >= 0) {
    newQuantity = this.cart.items[cartIndex].quantity + 1;
    updatedItems[cartIndex].quantity = newQuantity;
  } else {
    updatedItems.push({
      productId: product._id,
      quantity: newQuantity,
    });
  }
  const updatedCart = {
    items: updatedItems,
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.deleteItemFromCart = function (productId) {
  let updateProduct = this.cart.items.filter((ele) => {
    return ele.productId.toString() != productId.toString();
  });
  this.cart.items = updateProduct;
  return this.save();
};
userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};
module.exports = mongoose.model("User", userSchema);

// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;

// class User {
//   constructor(name, email, cart, id) {
//     this.name = name;
//     this.email = email;
//     this.cart = cart;
//     this._id = id;
//   }

//   save() {
//     const db = getDb();
//     return db
//       .collection("users")
//       .insertOne(this)
//       .then(() => {
//         console.log("user added");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   addToCart(product) {
//     const cartProductIndex = this.cart.items.findIndex((i) => {
//       return i.productId.toString() === product._id.toString();
//     });
//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];
//     if (cartProductIndex >= 0) {
//       newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//       updatedCartItems[cartProductIndex].quantity = newQuantity;
//     } else {
//       updatedCartItems.push({
//         productId: new mongodb.ObjectId(product._id),
//         quantity: newQuantity,
//       });
//     }
//     const updatedCart = { items: updatedCartItems };
//     // const updatedCart = { items: [{productId: new mongodb.ObjectId(product._id), quantity:1}] };
//     const db = getDb();
//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new mongodb.ObjectId(this._id) },
//         { $set: { cart: updatedCart } }
//       );
//   }

//   getCart() {
//     const db = getDb();
//     const productIds = this.cart.items.map((i) => {
//       return i.productId;
//     });
//     return db
//       .collection("products")
//       .find({ _id: { $in: productIds } })
//       .toArray()
//       .then((products) => {
//         return products.map((p) => {
//           return {
//             ...p,
//             quantity: this.cart.items.find((i) => {
//               return i.productId.toString() === p._id.toString();
//             }).quantity,
//           };
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   deleteCartItem(prodId) {
//     const updatedCartItems = this.cart.items.filter((item) => {
//       return item.productId.toString() !== prodId.toString();
//     });
//     const db = getDb();
//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new mongodb.ObjectId(this._id) },
//         { $set: { cart: { items: updatedCartItems } } }
//       );
//   }

//   addOrder() {
//     const db = getDb();
//     return this.getCart()
//       .then((products) => {
//         const order = {
//           items: products,
//           user: {
//             _id: new mongodb.ObjectId(this._id),
//             name: this.name,
//             email: this.email,
//           },
//         };
//         return db.collection("orders").insertOne(order);
//       })
//       .then(() => {
//         this.cart = { items: [] };
//         return db
//           .collection("users")
//           .updateOne(
//             { _id: new mongodb.ObjectId(this._id) },
//             { $set: { cart: { items: [] } } }
//           );
//       });
//   }

//   getOrders() {
//     const db = getDb();
//     return db
//       .collection("orders")
//       .find({ "user._id": new mongodb.ObjectId(this._id) })
//       .toArray();
//   }

//   static findById(userId) {
//     const db = getDb();
//     return db
//       .collection("users")
//       .find({ _id: new mongodb.ObjectId(userId) })
//       .next()
//       .then((user) => {
//         console.log("Fetched product");
//         return user;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }
// module.exports = User;
