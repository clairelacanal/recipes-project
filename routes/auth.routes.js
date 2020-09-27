const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')

const User = require('../models/User.model')

// GET route for signup
router.get("/signup", (req, res, next) => {
  res.render('auth/signup')
})


// POST route for signup
const salt = bcryptjs.genSaltSync(10);
router.post('/signup', (req, res, next) => {
    //console.log(req.body)
    const {username, email} = req.body;

    const plainPassword = req.body.password;
    const hashedPassword = bcryptjs.hashSync(plainPassword, salt)
    //console.log("hashed = ", hashedPassword)

    User.create({
      username,
      email,
      passwordHash:hashedPassword,
    })
      .then(userFromDB => {
        res.render("profile/profile-user")
      })
      .catch(err => {
        next(err);

      if (err instanceof mongoose.Error.ValidationError || err.code === 11000) {
        res.render("auth/signup", {
          errorMessage: err.message
        })}
        else {
          next(err) 
    }
  }) 
})

// GET route for login
router.get("/login", (req, res, next) => {
  res.render("auth/login")
});

// POST route for login



// export router
module.exports = router;