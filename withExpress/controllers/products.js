const Product = require("../models/product");
exports.getProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postProduct = (req, res, next) => {
  console.log(req.body.title);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true,
    });
  });
};
