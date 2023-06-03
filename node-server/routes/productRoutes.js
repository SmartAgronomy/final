const express = require('express');
const productController = require('../controller/productController');
const { verifyToken } = require('../middlewares/authuser');
const router = express.Router();

// Route to get all products
router.get('/', async (req, res) => {
  const productsResult = await productController.getProducts();
  if (productsResult.success) {
    res.status(200).json({ products: productsResult.products });
  } else {
    res.status(500).json({ message: productsResult.message });
  }
});

// Route to add a product
router.post('/', verifyToken,  async (req, res) => {
  const { productName, productDescription, amount, productImage, categoryId } = req.body;

  const result = await productController.addProduct(
    productName,
    productDescription,
    amount,
    productImage,
    categoryId
  );
  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

// Route to delete a product
router.delete('/:id', verifyToken,  async (req, res) => {
  const productId = req.params.id;

  const result = await productController.deleteProduct(productId);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

// Route to edit a product
router.put('/:id', verifyToken,  async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  const result = await productController.editProduct(productId, updatedData);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

module.exports = router;



// const express = require('express');
// const productController = require('../controller/productController');
// const { verifyToken } = require('../middlewares/authuser');

// const router = express.Router();

// // Route to get all products
// router.get('/', productController.getProducts);

// // Route to add a product
// router.post('/', verifyToken, productController.addProduct);

// // Route to delete a product
// router.delete('/:id', verifyToken, productController.deleteProduct);

// // Route to edit a product
// router.put('/:id', verifyToken, productController.editProduct);

// module.exports = router;
