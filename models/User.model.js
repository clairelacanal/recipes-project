const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  photoUser: String,

  username: {	
		type: String,
		trim: true,
		required: [true, "Nom d'utilisateur obligatoire"],
		unique: true
  },

  email : {	
		type: String,
		required: [true, " Email obligatoire"]
  },

  password : {	
		type: String,
		required: [true, "Mot de passe obligatoire"],
  },

  favoriteRecipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ],
  
  myRecipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ]
},
{		
timestamps: true		 	
})

module.exports = model('User', userSchema);




