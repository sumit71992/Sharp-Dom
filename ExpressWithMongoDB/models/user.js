const mongodb = require("mongodb");
const getDb = require('../util/database');

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  save() {
    const db = getDb();
    return db.collection('users').insertOne(this).then(() => {
      console.log("user added");
    })
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new mongodb.ObjectId(userId) })
      .next()
      .then((user) => {
        console.log("Fetched product");
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = User;
