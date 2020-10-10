const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
const fileUploader = require('../configs/cloudinary.config');

const User = require('../models/User.model')

// GET route for signup
router.get("/signup", fileUploader.single('image'), (req, res, next) => {
  res.render('auth/signup')
})

// POST route for signup
const salt = bcryptjs.genSaltSync(10);
router.post('/signup',fileUploader.single('image'),(req, res, next) => {
    //console.log(req.body)
    const {username, email} = req.body;
    let photoUser;

    if (req.file) {
      photoUser = req.file.path;
    }

    const plainPassword = req.body.password;

    const hashedPassword = bcryptjs.hashSync(plainPassword, salt)
    //console.log("hashed = ", hashedPassword)

    User.create({
      username,
      email,
      passwordHash:hashedPassword,
      photoUser,
    })
      .then(userFromDB => {
        res.render("profile/account-created")
      })
      .catch(err => {
        next(err);

      if (err instanceof mongoose.Error.ValidationError || err.code === 11000) {
        res.render("auth/signup", {
          errorMessage: "All fields are required"
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
router.post("/login", (req, res, next) => {
  console.log('SESSION =====> ', req.session);
  
  const {username, email, password} = req.body;

  if (username == '' || email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter your email and password to login.'
    });
    return;
  }

  User.findOne({email})
    .then(user => {
      if(!user) {
        res.render('auth/login', {errorMessage: "Incorrect mail or password"})
        return
      } else {
        if(bcryptjs.compareSync(password, user.passwordHash)) {
          // mdp ok
          
          // infos du user ds son casier
          req.session.user = user;
          // j'ai remis l'id ailleurs car l'id du user copié dans la session est perdu pendant le redirect (???)
          req.session.userid = user.id;

          res.redirect('/userProfile')
        } else {
          res.render('auth/login', {errorMessage : "Incorrect mail or password"})
          return;
        }
      }
      })
    .catch(err => next(err))
})


router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

//router.get('/userProfile', routeGuard, (req, res) => {
  //res.render('users/user-profile');
//});


// export router
module.exports = router;