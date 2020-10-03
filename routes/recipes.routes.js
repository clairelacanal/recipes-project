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
router.post('/', (req,res,next) => {
  const {ingredient1, ingredient2, ingredient3} = req.body;

  let allIngredients = [];
  allIngredients.push(ingredient1, ingredient2, ingredient3);
  console.log(allIngredients)
  
  let ingredientsId = [];

  allIngredients.forEach(el => {
    Ingredient.find({name : el})
      .then(ingredientFromDB => {
        /*
        [
          {
            _id: 5f787bb33f466f126497dc1a,
            image: 'zucchini.jpg',
            name: 'zucchini',
            createdAt: 2020-10-03T13:25:07.987Z,
            updatedAt: 2020-10-03T13:25:07.987Z,
            __v: 0
          }
        ]
        */
        console.log(ingredientFromDB[0].id)
        ingredientsId.push(ingredientFromDB[0].id)
      })
      .catch(err => {
        next(err) })
  })
  //console.log(ingredientsId)

  
})




///search?city=Barcelona&start-date=2018-01-18







// export router
module.exports = router;