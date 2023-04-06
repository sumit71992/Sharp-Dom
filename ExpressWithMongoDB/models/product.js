const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Product",productSchema);
// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     (this.price = price), (this.description = description);
//     this.imageUrl = imageUrl;
//     this._id = id? new mongodb.ObjectId(id): null;
//     this.userId = userId;
//   }
//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       //update product
//       dbOp = db
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       //add product
//       dbOp = db.collection("products").insertOne(this);
//     }
//     return dbOp
//       .then((res) => {
//         console.log("Product added");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log("Fetched all product");
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find({ _id: new mongodb.ObjectId(prodId) })
//       .next()
//       .then((product) => {
//         console.log("Fetched product");
//         return product;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   static deleteById(id) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .deleteOne({ _id: new mongodb.ObjectId(id) })
//       .then((res) => {
//         console.log("Product deleted");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// module.exports = Product;
