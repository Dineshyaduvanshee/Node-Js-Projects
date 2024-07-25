const express = require('express');
const router = express.Router();
const { getAllProducts, getAllProductsTestings } = require('../controllers/products');

router.get('/', getAllProducts);
router.get('/testings', getAllProductsTestings);

module.exports = router;
