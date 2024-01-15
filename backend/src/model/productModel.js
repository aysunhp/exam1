const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    rate: String,
    favourite: String,
    image: String,
  },
  {
    collection: "selling",
  }
);

const Product = mongoose.model("selling", productSchema);

module.exports = Product;
