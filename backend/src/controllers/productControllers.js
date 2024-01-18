const mongoose = require("mongoose");
const Product = require("./../model/productModel");

const getAllProducts = async (req, res) => {
  const allProds = await Product.find({});
  res.send(allProds);
};

const deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndDelete({ _id: req.params.id });
  res.send(deleted)
};

const postProduct = async (req, res) => {
  const newProd = await Product(req.body);
 await newProd.save();
 res.send(newProd)
};

module.exports = { getAllProducts, deleteProduct, postProduct };
