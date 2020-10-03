const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
  id:String,
  name: String,
  image:String,
  recipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ], 
},
{
    timestamps:true	  
})

module.exports = model('Ingredient', ingredientSchema);


