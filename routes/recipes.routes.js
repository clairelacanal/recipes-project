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
  if(ingredient1 !== "") {
    allIngredients.push(ingredient1)
  }
  if(ingredient2 !== "") {
    allIngredients.push(ingredient2)
  }
  if(ingredient3 !== "") {
    allIngredients.push(ingredient3)
  }
  console.log(allIngredients)
  
  let ingredientsId;
  let promises = [];
  allIngredients.forEach(el => {
    ingredientsId = Ingredient.find({name : el})
      .then(ingredientFromDB => {
        /*[{
            _id: 5f787bb33f466f126497dc1a,
            image: 'zucchini.jpg',
            name: 'zucchini',
            createdAt: 2020-10-03T13:25:07.987Z,
            updatedAt: 2020-10-03T13:25:07.987Z,
            __v: 0
          }]*/
        return ingredientFromDB[0].id
      })
      promises.push(ingredientsId);
  })
  
  Promise.all(promises)
    .then(responses => {
      Recipe.find({ingredients : {$in : responses}})
        .then(recipesFromDB => {
          res.render('recipes/all-recipes-filter', {
            recipes:recipesFromDB
          })
        })
    }).catch(err => console.log(err))
})

//GET route pour afficher le détail d'une recette
router.get('/recipes/:id/detail-recipe', (req, res, next) => {
  Recipe.findById(req.params.id)
  .populate('ingredients')
  .then((recipesDetails) => {
    res.render('recipes/detail-recipe', {
      recipes:recipesDetails
    })
  }).catch(err => {
    next(err)
  })  
})








// export router
module.exports = router;