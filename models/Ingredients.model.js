const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
  name: String,
  image:String,
  amount: Number,
  unit: String 
},
{
    timestamps:true	  
})

module.exports = model('Ingredient', ingredientSchema);


