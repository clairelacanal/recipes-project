const express = require('express');
const router  = express.Router();
const Ingredient = require('../models/Ingredients.model')



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');

  
})







module.exports = router;
