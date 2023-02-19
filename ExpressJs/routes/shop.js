const productsController = require('../controllers/products');
const contactusController = require('../controllers/main');
const express = require("express");

const router = express.Router();
//contact us routes start
router.get('/contactus',contactusController.contactUs);
router.post('/success',contactusController.successMessage)
// contactus route end
router.get('/',productsController.getProducts);
module.exports=router;