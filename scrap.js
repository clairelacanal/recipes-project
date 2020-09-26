const axios = require('axios')

// 1. Créer la liste d'ingrédients 
const ingredients = ['chicken','zucchini','pasta'];

// 2. Se connecter avec l'API 
const key = process.env.API_KEY

// 3. Pour chaque ingrédient, faire une requête pour trouver les recettes.
// Enregistrer les recettes dans un tableau 
let recipes = [];


const promises = []




ingredients.forEach(el => {
  const p = axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${el}&apiKey=${key}`)
  .then(responseFromApi => {
    console.log(responseFromApi);
    // des recettes, recupérer id, title, image
    return responseFromApi.data.map(el => {
      return {
        id : el.id,
        title : el.title,
        image : el.image,
      }
    }) // [{...},{}]
  })

  promise.push(p)
})

Promise.all(promises).then(foo => {
  foo // [ [{...},{}], [{...},{}], [{...},{}] ]

  

}).,catch()

// 4. Pour chaque recette, faire une requête aller récupérer les instructions
// cuisineType + Intolerance + mealTypes + diet
// Enregistrer ces informations dans les recettes 

// 5. Pusher toutes ces informations dans fichier .json pour base de données propre

