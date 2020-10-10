const { Schema, model } = require('mongoose');
const IngredientsModel = require('./Ingredients.model');

const recipeSchema = new Schema({
	title: String,
	summary: String,
	servings: Number,
	image: String,
	readyInMinutes: Number,
	ingredients: [{ type : Schema.Types.ObjectId, ref: 'Ingredient' }],
	instructions: String,
	analyzedInstructions: [Object],
	dishTypes: [String],
	cuisines: [String],
	diets: [String],
  //review: [ { type : Schema.Types.ObjectId, ref: 'Comment' } ] 
},
{		
    timestamps: true		
})

module.exports = model('Recipe', recipeSchema);


