const axios = require('axios')

// 1. Créer la liste d'ingrédients 
const ingredients = ['chicken'];

// 2. API KEY 
const key = '0e0bfd87a30f48e4898abb41bd8b08fa'//process.env.APIKEY

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
      recipesDetails = axios.get(`https://api.spoonacular.com/recipes/${el}/information?includeNutrition=false&apiKey=${key}`)
        .then(resultFromApi => {
          //console.log(resultFromApi)
          return resultFromApi.map(el => {
            return {
              id : el.id,
              vegetarian : el.vegetarian,
              vegan : el.vegan,
              glutenFree : el.glutenFree,
              dairyFree : el.dairyFree,
              veryHealthy : el.veryHealthy,
              title : el.title,
              extendedIngredients : el.extendedIngredients,
              readyInMinutes : el.readyInMinutes,
              servings : el.servings,
              image : el.image,
              summary : el.summary,
              cuisines : el.cuisines,
              dishTypes : el.dishTypes,
              diets :el.diets,
              instructions : el.instructions,
              analyzedInstructions : el.analyzedInstructions,
            }
          })        
        })
      
      promises2.push(recipesDetails)
    })   
    console.log(promises2)

    Promise.all(promises2).then(recipesInfo => {
      //console.log(recipesInfo)
      console.log(JSON.stringify(recipesInfo, null, 3));
    }).catch(err => console.log(err));

    
  })
  .catch(err => {
    console.log(err)
  });

