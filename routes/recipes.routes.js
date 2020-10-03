const express = require('express');
const router  = express.Router();
const Recipe = require('../models/Recipe.model');
const fileUploader = require('../configs/cloudinary.config');

// GET route pour afficher toutes les recettes
router.get('/recipes', (req,res,next) => {

    Recipe.find()
      .then(recipesFromDB => {
        res.render('recipes/all-recipes', {
          recipes: recipesFromDB
      })
  }).catch(err => {
    next(err)
  })
})







// export router
module.exports = router;