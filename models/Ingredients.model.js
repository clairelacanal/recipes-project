const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
  name: String,
  image:String,
  amount: Number,
  unit: String,
  recipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ], 
},
{
    timestamps:true	  
})

module.exports = model('Ingredient', ingredientSchema);


