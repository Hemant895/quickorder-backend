const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router
  .post('/', productController.createProduct)
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .get('/search/:searchTerm', productController.searchProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

exports.router = router;  