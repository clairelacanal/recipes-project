require('debug')('foo')

const mongoose = require('mongoose')

const Recipe = require('../models/Recipe.model.js')
const Ingredient = require('../models/Ingredients.model.js')

Recipe.collection.drop()
Ingredient.collection.drop()

const DB_NAME = "recipes-project";

// Recipie
//   ingredients -> Ingredient

const recipesData = require('./data.json')
/*
[
   {
      "vegetarian": false,
      ...
      "extendedIngredients": [
         {
            "id": 18334,
            "aisle": "Refrigerated",
            "image": "pie-crust.jpg",
            "consistency": "solid",
            "name": "pie crust",
            ...
         },
         ...
      ],
      "id": 767819,
      "title": "Grilled Zucchini Lasagna",
      ...
   }
]
*/

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database')
})

//
// 1. creer les ingredients en base (issus de chq recette des datas)
// 2. creer les recettes en base ({ ingredients: ['2134']})
//

// 1.
const ingredientsData = []

const ingredientsDataByIngredientId = {/*
   '18334': {},
   ...
*/}

recipesData.forEach(recipeData => {
   recipeData.extendedIngredients.forEach(ingredientData => {
      ingredientsDataByIngredientId[ingredientData.id] = ingredientData
   })
})

Ingredient.create(Object.values(ingredientsDataByIngredientId)).then(ingredientsFromDb => {
   // 2.
   
   recipesData // ingredients: ['1234', '2345']

   recipesData.forEach(recipeData => {
      recipeData.ingredients = recipeData.extendedIngredients.map(ingredientData => {
         const pos = Object.keys(ingredientsDataByIngredientId).indexOf(`${ingredientData.id}`) // 0
         return ingredientsFromDb[pos].id
      })
   })

   Recipe.create(recipesData).then(recipesFromDb => {
      console.log(`${recipesFromDb.length} recipes created!`)
      mongoose.connection.close();
   }).catch(err => console.log(err))
})

