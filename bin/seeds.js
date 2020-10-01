const mongoose = require('mongoose')
const Recipe = require('../models/Recipe.model.js')

const DB_NAME = "recipes-project";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('youhou')
})


const recipes = [
  {
    "id": 20444,
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "title": "25 Chicken",
    "extendedIngredients": [
      {
          "id": 10123,
          "aisle": "Meat",
          "image": "raw-bacon.png",
          "consistency": "solid",
          "name": "bacon",
          "original": "Bacon Wrapped Chicken – No one can resist this cheese stuffed, bacon wrapped chicken! Brush on some bbq sauce and serve with mashed potatoes and corn and you're in business!",
          "originalString": "Bacon Wrapped Chicken – No one can resist this cheese stuffed, bacon wrapped chicken! Brush on some bbq sauce and serve with mashed potatoes and corn and you're in business!",
          "originalName": "Bacon Wrapped Chicken – No one resist this cheese stuffed, bacon wrapped chicken! Brush on some bbq sauce and serve with mashed potatoes and corn and you're in business",
          "amount": 1.0,
          "unit": "can",
          "meta": [
              "with mashed potatoes and corn and you're in business!"
          ],
          "metaInformation": [
              "with mashed potatoes and corn and you're in business!"
          ],
          "measures": {
              "us": {
                  "amount": 1.0,
                  "unitShort": "can",
                  "unitLong": "can"
              },
              "metric": {
                  "amount": 1.0,
                  "unitShort": "can",
                  "unitLong": "can"
              }
          }
      },
      {
          "id": 5006,
          "aisle": "Meat",
          "image": "whole-chicken.jpg",
          "consistency": "solid",
          "name": "chicken",
          "original": "Brown Sugar Pineapple Chicken – My favorite grilling recipe! I love the sweet glaze on this chicken and the pineapple is insanely good. Serve with rice or on a burger bun with lettuce!",
          "originalString": "Brown Sugar Pineapple Chicken – My favorite grilling recipe! I love the sweet glaze on this chicken and the pineapple is insanely good. Serve with rice or on a burger bun with lettuce!",
          "originalName": "Brown Sugar Pineapple Chicken – My favorite grilling recipe! I love the sweet glaze on this chicken and the pineapple is insanely good. Serve with rice or on a burger bun with lettuce",
          "amount": 1.0,
          "unit": "serving",
          "meta": [
              "sweet",
              "with rice or on a burger bun with lettuce!"
          ],
          "metaInformation": [
              "sweet",
              "with rice or on a burger bun with lettuce!"
          ],
          "measures": {
              "us": {
                  "amount": 1.0,
                  "unitShort": "serving",
                  "unitLong": "serving"
              },
              "metric": {
                  "amount": 1.0,
                  "unitShort": "serving",
                  "unitLong": "serving"
              }
          }
      },
      {
          "id": 5006,
          "aisle": "Meat",
          "image": "whole-chicken.jpg",
          "consistency": "solid",
          "name": "chicken",
          "original": "Sheet Pan Chicken Fajitas – Easiest fajitas ever! Chop eveything up, toss in seasoning, and bake until done. Just add tortillas!",
          "originalString": "Sheet Pan Chicken Fajitas – Easiest fajitas ever! Chop eveything up, toss in seasoning, and bake until done. Just add tortillas!",
          "originalName": "Pan Chicken Fajitas – Easiest fajitas ever! Chop eveything up, toss in seasoning, and bake until done. Just add tortillas",
          "amount": 1.0,
          "unit": "Sheet",
          "meta": [],
          "metaInformation": [],
          "measures": {
              "us": {
                  "amount": 1.0,
                  "unitShort": "Sheet",
                  "unitLong": "Sheet"
              },
              "metric": {
                  "amount": 1.0,
                  "unitShort": "Sheet",
                  "unitLong": "Sheet"
              }
          }
      },
      {
          "id": 20444,
          "aisle": "Pasta and Rice",
          "image": "uncooked-white-rice.png",
          "consistency": "solid",
          "name": "rice",
          "original": "Chicken & Wild Rice Casserole – Comfort food all the way! This recipe remind of of Sunday supper at my grandma's house.",
          "originalString": "Chicken & Wild Rice Casserole – Comfort food all the way! This recipe remind of of Sunday supper at my grandma's house.",
          "originalName": "Chicken & Wild Rice Casserole – Comfort food all the way! This recipe remind of of Sunday supper at my grandma's house",
          "amount": 1.0,
          "unit": "serving",
          "meta": [
              "wild"
          ],
          "metaInformation": [
              "wild"
          ],
          "measures": {
              "us": {
                  "amount": 1.0,
                  "unitShort": "serving",
                  "unitLong": "serving"
              },
              "metric": {
                  "amount": 1.0,
                  "unitShort": "serving",
                  "unitLong": "serving"
              }
          }
      }
  ],
    "readyInMinutes": 45,
    "servings": 15,
    "image": "https://spoonacular.com/recipeImages/1075071-556x370.jpg",
    "summary": "The recipe 25 Chicken can be made <b>in roughly about 45 minutes</b>. One portion of this dish contains about <b>1g of protein</b>, <b>1g of fat</b>, and a total of <b>16 calories</b>. This recipe serves 15 and costs 5 cents per serving. This recipe from Real Housemoms requires bacon wrapped chicken - no one can resist this cheese stuffed, brown sugar pineapple chicken - my favorite grilling recipe! i love the glaze on this chicken and the pineapple is insanely good. serve, pan chicken fajitas - easiest fajitas ever! chop eveything up, and chicken & rice casserole - comfort food all the way! this recipe remind of of sunday supper at my grandma's house. It works well as a hor d'oeuvre. 1 person has tried and liked this recipe. It is a good option if you're following a <b>gluten free, dairy free, and fodmap friendly</b> diet. With a spoonacular <b>score of 40%</b>, this dish is not so tremendous. <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href=\"https://spoonacular.com/recipes/the-best-shredded-chicken-for-your-chicken-dishes-+-homemade-chicken-broth-528123\">The Best Shredded Chicken For Your Chicken Dishes + Homemade Chicken Broth</a>, and <a href=\"https://spoonacular.com/recipes/chicken-breasts-stuffed-with-prosciutto-and-gruyre-cheese-chicken-cordon-bleu-163336\">Chicken Breasts Stuffed with Prosciutto and Gruyère Cheese (Chicken Cordon Bleu)</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "fodmap friendly"
    ],
    "instructions": "Bacon Wrapped Chicken  No one can resist this cheese stuffed, bacon wrapped chicken! Brush on some bbq sauce and serve with mashed potatoes and corn and youre in business!\n\nBrown Sugar Pineapple Chicken  My favorite grilling recipe! I love the sweet glaze on this chicken and the pineapple is insanely good. Serve with rice or on a burger bun with lettuce!\n\nHoney Butter Chicken  This 15 minute dinner is epic! all that caramlized chicken makes me drool.\n\nSheet Pan Chicken Fajitas  Easiest fajitas ever! Chop eveything up, toss in seasoning, and bake until done. Just add tortillas!\n\nChicken & Wild Rice Casserole  Comfort food all the way! This recipe remind of of Sunday supper at my grandmas house.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Bacon Wrapped Chicken  No one can resist this cheese stuffed, bacon wrapped chicken!",
                    "ingredients": [
                        {
                            "id": 5006,
                            "name": "whole chicken",
                            "localizedName": "whole chicken",
                            "image": "whole-chicken.jpg"
                        },
                        {
                            "id": 1041009,
                            "name": "cheese",
                            "localizedName": "cheese",
                            "image": "cheddar-cheese.png"
                        },
                        {
                            "id": 10123,
                            "name": "bacon",
                            "localizedName": "bacon",
                            "image": "raw-bacon.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 2,
                    "step": "Brush on some bbq sauce and serve with mashed potatoes and corn and youre in business!",
                    "ingredients": [
                        {
                            "id": 6150,
                            "name": "barbecue sauce",
                            "localizedName": "barbecue sauce",
                            "image": "barbecue-sauce.jpg"
                        },
                        {
                            "id": 11352,
                            "name": "potato",
                            "localizedName": "potato",
                            "image": "potatoes-yukon-gold.png"
                        },
                        {
                            "id": 11168,
                            "name": "corn",
                            "localizedName": "corn",
                            "image": "corn.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Brown Sugar Pineapple Chicken  My favorite grilling recipe! I love the sweet glaze on this chicken and the pineapple is insanely good.",
                    "ingredients": [
                        {
                            "id": 19334,
                            "name": "brown sugar",
                            "localizedName": "brown sugar",
                            "image": "dark-brown-sugar.png"
                        },
                        {
                            "id": 9266,
                            "name": "pineapple",
                            "localizedName": "pineapple",
                            "image": "pineapple.jpg"
                        },
                        {
                            "id": 5006,
                            "name": "whole chicken",
                            "localizedName": "whole chicken",
                            "image": "whole-chicken.jpg"
                        },
                        {
                            "id": 0,
                            "name": "glaze",
                            "localizedName": "glaze",
                            "image": ""
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 4,
                    "step": "Serve with rice or on a burger bun with lettuce!",
                    "ingredients": [
                        {
                            "id": 18350,
                            "name": "hamburger bun",
                            "localizedName": "hamburger bun",
                            "image": "hamburger-bun.jpg"
                        },
                        {
                            "id": 11252,
                            "name": "lettuce",
                            "localizedName": "lettuce",
                            "image": "iceberg-lettuce.jpg"
                        },
                        {
                            "id": 20444,
                            "name": "rice",
                            "localizedName": "rice",
                            "image": "uncooked-white-rice.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Honey Butter Chicken  This 15 minute dinner is epic! all that caramlized chicken makes me drool.",
                    "ingredients": [
                        {
                            "id": 0,
                            "name": "honey butter",
                            "localizedName": "honey butter",
                            "image": ""
                        },
                        {
                            "id": 5006,
                            "name": "whole chicken",
                            "localizedName": "whole chicken",
                            "image": "whole-chicken.jpg"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 15,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 6,
                    "step": "Sheet Pan Chicken Fajitas  Easiest fajitas ever! Chop eveything up, toss in seasoning, and bake until done. Just add tortillas!",
                    "ingredients": [
                        {
                            "id": 1042027,
                            "name": "seasoning",
                            "localizedName": "seasoning",
                            "image": "seasoning.png"
                        },
                        {
                            "id": 18364,
                            "name": "tortilla",
                            "localizedName": "tortilla",
                            "image": "flour-tortilla.jpg"
                        },
                        {
                            "id": 5006,
                            "name": "whole chicken",
                            "localizedName": "whole chicken",
                            "image": "whole-chicken.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        },
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 7,
                    "step": "Chicken & Wild Rice Casserole  Comfort food all the way! This recipe remind of of Sunday supper at my grandmas house.",
                    "ingredients": [
                        {
                            "id": 20088,
                            "name": "wild rice",
                            "localizedName": "wild rice",
                            "image": "rice-wild-uncooked.png"
                        },
                        {
                            "id": 5006,
                            "name": "whole chicken",
                            "localizedName": "whole chicken",
                            "image": "whole-chicken.jpg"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
  } 
]

Recipe.create(recipes).then(allRecipes => {
        console.log(`réussi !! ${allRecipes.length}`)
        mongoose.connection.close;
    })
    .catch(err => {
        console.log('ooops', err)
    })