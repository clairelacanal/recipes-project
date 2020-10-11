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

// POST route pour filtrer les recettes 
router.get('/search', (req, res, next) => {
  
  let queries = Object.keys(req.query);
  console.log(queries) // [ 'french', 'main' ]

  let diets = [];
  let cuisines = [];
  let dishTypes = [];
  
  queries.forEach(el => {
    console.log(el)
    if (el === "lacto ovo vegetarian" || el ==="vegan" || el ==="gluten free" || el ==="dairy free") {
      diets.push(el);
      //console.log("diets:", diets);
    } else if (el === "main course" || el === "main dish"|| el === "side dish" || el === "dessert" || el === "appetizer" || el === "salad" || el ==="breakfast" || el === "soup" || el ==="condiment") {
      dishTypes.push(el)
    } else {
      cuisines.push(el)
      //console.log("cuisines:", cuisines);
    }
  });

  Recipe.find({$or : [
    {dishTypes : {$in : dishTypes }},
    {cuisines : {$in : cuisines}},
    {diets: {$in: diets}}
    ]})

    .then(recipesFromDB => {
      console.log("recipes from DBbbbb",recipesFromDB);
      res.render('recipes/all-recipes-filter', {
        recipes: recipesFromDB
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

// GET route pour afficher le formulaire de création de notre recette
router.get('/create', fileUploader.single('image'), (req, res, next) => {
  res.render('profile/create-recipe')
})

//POST route pour traiter les données du formulaire
router.post('/create', fileUploader.single('image'), (req, res, next) => {
  const {title, readyInMinutes, ingredient1, ingredient2, ingredient3, ingredient4,
    ingredient5, step1, step2, step3, step4, step5} = req.body;
    
  let ingredients = [];
  let ingredientPromises = [];
  if (ingredient1) {
    ingredientPromises.push(Ingredient.findOne({name: ingredient1}, (err, ingredient)=> {
      if (!ingredient) {
        ingredientPromises.push(Ingredient.create({name: ingredient1})
          .then(createdIngredient => {ingredients.push(createdIngredient)}));
      } else {
        ingredients.push(ingredient);
      }
    }));
  }
  if (ingredient2) {
    ingredientPromises.push(Ingredient.findOne({name: ingredient2}, (err, ingredient)=> {
      if (!ingredient) {
        ingredientPromises.push(Ingredient.create({name: ingredient2})
          .then(createdIngredient => {ingredients.push(createdIngredient)}));
      } else {
        ingredients.push(ingredient);
      }
    }));
  }
  if (ingredient3) {
    ingredientPromises.push(Ingredient.findOne({name: ingredient3}, (err, ingredient)=> {
      if (!ingredient) {
        ingredientPromises.push(Ingredient.create({name: ingredient3})
          .then(createdIngredient => {ingredients.push(createdIngredient)}));
      } else {
        ingredients.push(ingredient);
      }
    }));
  }
  if (ingredient4) {
    ingredientPromises.push(Ingredient.findOne({name: ingredient4}, (err, ingredient)=> {
      if (!ingredient) {
        ingredientPromises.push(Ingredient.create({name: ingredient4})
          .then(createdIngredient => {ingredients.push(createdIngredient)}));
      } else {
        ingredients.push(ingredient);
      }
    }));
  }
  if (ingredient5) {
    ingredientPromises.push(Ingredient.findOne({name: ingredient5}, (err, ingredient)=> {
      if (!ingredient) {
        ingredientPromises.push(Ingredient.create({name: ingredient5})
          .then(createdIngredient => {ingredients.push(createdIngredient)}));
      } else {
        ingredients.push(ingredient);
      }
    }));
  }

  let objInstructions = [{name: 'instructions', steps : []}];
  let steps = objInstructions[0].steps;
  if (step1) {
    let step1Obj = {number:1, step:step1};
    steps.push(step1Obj)
  }
  if (step2) {
    let step2Obj = {number:2, step:step2};
    steps.push(step2Obj)
  }
  if (step3) {
    let step3Obj = {number:3, step:step3};
    steps.push(step3Obj)
  }
  if (step4) {
    let step4Obj = {number:4, step:step4};
    steps.push(step4Obj)
  }
  if (step5) {
    let step5Obj = {number:5, step:step5};
    steps.push(step5Obj)
  }

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









// export router
module.exports = router;