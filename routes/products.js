const express = require('express');
const productController = require('../controllers/product');
const Auth = require('../controllers/auth');
const router = express.Router();

router
  .post('/',Auth, productController.createProduct)
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .get('/search/:searchTerm', productController.searchProduct)
  .put('/:id',Auth,productController.replaceProduct)
  .patch('/:id',Auth, productController.updateProduct)
  .delete('/:id',Auth, productController.deleteProduct);

exports.router = router;  