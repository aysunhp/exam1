const router = require("express").Router();
const productController = require("./../controllers/productControllers");

router.get("/products", productController.getAllProducts);
router.post("/products", productController.postProduct);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
