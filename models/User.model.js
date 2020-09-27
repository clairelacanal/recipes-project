const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  photoUser: String,

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

  favoriteRecipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ],
  
  myRecipes: [ { type : Schema.Types.ObjectId, ref: 'Recipe' } ]
},
{		
timestamps: true		 	
})

module.exports = model('User', userSchema);




