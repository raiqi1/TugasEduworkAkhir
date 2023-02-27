const express = require("express");
const {
  getProducts,
  newProduct,
  getSingleProduct,
  createReview,
} = require("../controllers/productController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/authenticate");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/review").put(isAuthenticatedUser, createReview);
// only admin 
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
module.exports = router;
