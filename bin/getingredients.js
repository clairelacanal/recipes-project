const mongoose = require("mongoose")
const express = require('express');
const Ingredient = require("../models/Ingredients.model")

const ingredientsByName = [];

Ingredient.find({}, {name : 1, _id:0})
  .then(ingredientsFromDB => {
  
    ingredientsFromDB.forEach(el => {
      ingredientsByName.push(el)
    })
    console.log(ingredientsFromDB)
  })
  .catch(err => console.log(err))

console.log(ingredientsByName)



