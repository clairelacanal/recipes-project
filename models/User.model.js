const { Schema, model } = require('mongoose');

const userSchema = new Schema({

  username: {	
		type: String,
		trim: true,
		required: [true, "Username is required"],
		unique: true
  },

  email : {	
		type: String,
		required: [true, " Email is required"]
  },

  passwordHash : {	
		type: String,
		required: [true, "Password is required"],
  },

  photoUser: String,

  favoriteRecipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ],
  
  myRecipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ]
},
{		
timestamps: true		 	
})

module.exports = model('User', userSchema);




