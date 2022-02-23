exports.getError404 = (req, res, next) => {
  res.render("error", { pageTitle: "Error Page" });
};
