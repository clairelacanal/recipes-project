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

<<<<<<< HEAD
// GET route pour afficher le formulaire de création de notre recette
router.get('/create', fileUploader.single('image'), (req, res, next) => {
  res.render('profile/create-recipe')
})

//POST route pour traiter les données du formulaire
router.post('/create', fileUploader.single('image'), (req, res, next) => {
  const {title, readyInMinutes, ingredient1, step} = req.body;
  let ingredients = [];
  let ingredientPromises = [];
  ingredientPromises.push(Ingredient.findOne({name: ingredient1}, (err, ingredient)=> {
    if (!ingredient) {
      ingredientPromises.push(Ingredient.create({name: ingredient1})
        .then(createdIngredient => {ingredients.push(createdIngredient)}));
    } else {
      ingredients.push(ingredient);
    }
  }));
  let objInstructions = [{name: 'instructions', steps : [{ number:1, step: step }]}];
  let image;

    if (req.file) {
      image = req.file.path;
    }

    Promise.all(ingredientPromises)
    .then(responses => {
      Recipe.create({
        title,
        readyInMinutes,
        ingredients: ingredients,
        analyzedInstructions: objInstructions,
        image
      })
      .then(recipeUser => {
        res.render('profile/affichage-my-recipe', {
          recipe:recipeUser
        })
      }).catch(err => {
        next(err)
      })
    })
})

=======
//GET footer page ingredints-index
router.get('/ingredients-index', (req,res,next) => {
  Ingredient.find({}, {name:1, _id:0})
    .then(ingredientsFromDB => {
      /*let orderedIngredients = [];
      ingredientsFromDB.forEach(el => {
        orderedIngredients.push(el.name)
      })
      orderedIngredients.sort();
      console.log(orderedIngredients);*/
      res.render('recipes/ingredients-index', {
        ingredients: ingredientsFromDB
      })
    })
    .catch(err => next(err))
})
>>>>>>> 092b2b0483d64712ec7791890107e7cd2d6d20ce







// export router
module.exports = router;