const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoConnect = require("./util/database");
const User = require('./models/user');
const errorController = require("./controllers/error");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next)=>{
    User.findById('642e6c3494842c5dc899debb').then(user=>{
     
        req.user = user;
        next();
    }).catch(err=>{
        console.log(err);
    });
})

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
mongoConnect().then(() => {
  console.log("Successfully connected to db");
  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
}).catch(err=>{
    console.log(err);
});
