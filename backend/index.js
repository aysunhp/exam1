const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
require("./src/config/db");
const router = require("./src/routes/productRoutes");
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
