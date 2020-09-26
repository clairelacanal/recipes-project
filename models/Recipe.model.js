const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  title: String,
  image: String,
  ingredients: [ { type : Schema.Types.ObjectId, ref: 'Ingredient' } ],

  instructions: {
    name: String,
    steps: [{
      number: Number,
      step: String,
    }]
  },

  cuisineType: {		
		american : Boolean,	
		african: Boolean, 	
		chinese: Boolean,	
		french:Boolean,	
		greek: Boolean,	
		indian: Boolean,	
		italian: Boolean,	
		japanese: Boolean, 	
  },

  intolerance: {		
		dairy: Boolean,	
		egg : Boolean,	
		gluten: Boolean,	
		grain: Boolean,	
		peanut:Boolean,	
		shellfish:Boolean,	
  },

  mealTypes: {		
		maincourse: Boolean,	
		sidedish: Boolean,	
		dessert: Boolean,	
		appetizer: Boolean,	
		salad: Boolean,	
		breakfast: Boolean,	
		soup: Boolean, 	
		snack: Boolean,	
		drink: Boolean, 	
  },
  
  diet: {		
		glutenfree: Boolean,	
		vegetarian: Boolean,	
		lactovegetarian: Boolean,	
		vegan : Boolean,	
  },

  review: [ { type : Schema.Types.ObjectId, ref: 'Comment' } ] 
},
{		
    timestamps: true		
})

module.exports = model('Recipe', recipeSchema);


