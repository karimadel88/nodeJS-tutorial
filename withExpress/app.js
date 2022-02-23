// http modules and create server it can shorten in express with app same and listen function
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const error404 = require("./routes/error404");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(error404);

app.listen(3000, () => {
  console.log("Done");
});
