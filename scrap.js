const axios = require('axios')

// 1. Créer la liste d'ingrédients 
const ingredients = ['chicken','zucchini','pasta'];

// 2. API KEY 
const key = '4067d48c7079498691f1064e9e61796d'//process.env.APIKEY

// 3. Pour chaque ingrédient, faire une requête pour trouver les recettes.
// Enregistrer les recettes dans un tableau 
let recipes;
let promises = [];

ingredients.forEach(el => {
  recipes = axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${el}&apiKey=${key}`)
  .then(responseFromApi => {
    //console.log(responseFromApi);
    // des recettes, recupérer id, title, image
    return responseFromApi.data.map(el => {
      return {
        id : el.id,
        title : el.title,
        image : el.image,
      }
    }) // [{...},{}]
  })

  promises.push(recipes)
})

console.log(recipes)
Promise.all(promises)
  .then(responses => { //
    // responses: [ [{id:, title:, image:,},{},...], [{},{}] ]

    const arr = []

    responses.forEach(el => {
      return el.forEach(el => arr.push(el.id)) // ['1234', '2345', ]
    }) // [ ['1234', '2345', ], ['3456', '56757', ] ]

    console.log('arr=', arr)

    const promises2 = [];
    let recipesDetails;

    arr.forEach(el => {
      recipesDetails = axios.get(`https://api.spoonacular.com/recipes/${el}/information&apiKey=${key}`
      .then(resultFromApi => {
      console.log(resultFromApi)
    })

    //Promise.all(promises2)
    })
  })
  .catch(err => {
    console.log(err)
  });

//4. Pour chaque recette, faire une requête aller récupérer les instructions
// cuisineType + Intolerance + mealTypes + diet
// Enregistrer ces informations dans les recettes 









// 5. Pusher toutes ces informations dans fichier .json pour base de données propre

/*

Promise.all(promises).then(recipesDetails => {
  JSON.stringify(recipesDetails, null, 3);

}).catch(err => console.log(err));
*/
// 
