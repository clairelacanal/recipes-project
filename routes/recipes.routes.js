const express = require('express');
const router  = express.Router();
const Recipe = require('../models/Recipe.model');
const Ingredient = require('../models/Ingredients.model');
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

//POST route pour afficher les recettes en fonction des ingrédients choisis
router.post('/recipes/search', (req,res,next) => {
  const {ingredient1, ingredient2, ingredient3} = req.body;
  console.log(ingredient1);

  Ingredient.find({
    ingredients: {$in:[ingredient1, ingredient2, ingredient3]}
  })
})



///search?city=Barcelona&start-date=2018-01-18







// export router
module.exports = router;