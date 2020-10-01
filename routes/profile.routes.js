const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const fileUploader = require('../configs/cloudinary.config');

const User = require('../models/User.model');


//GET route - Route d'affichage de mon userProfile
router.get('/userProfile',(req, res, next) => {
  res.render("profile/profile-user", {
    user: req.session.CurrentUser
  })
})


//GET route - Route d'affichage de mon account settings
router.get('/userProfile/:id/account-settings',fileUploader.single('image'),(req, res, next) => {
  User.findById(req.params.id).then((user) => {
    res.render('profile/account-settings', {
      user:user
    })
  }).catch(err => {
    next(err)
  })
})


//POST - Route de traitement de mon formulaire account settings
const salt = bcryptjs.genSaltSync(10);
router.post('/userProfile/:id/account-settings', fileUploader.single('image'),(req, res, next) => {
  const {username, email} = req.body;

  const plainPassword = req.body.password;
  const hashedPassword = bcryptjs.hashSync(plainPassword, salt);

  let photoUser;
  if (req.file) {
    photoUser = req.file.path;
  } else {
    photoUser = req.body.existingImage;
  }


  User.findByIdAndUpdate(req.params.id,{
    username,
    email,
    password:hashedPassword,
    photoUser
  },{ new: true }).then((user) => {
    res.render("profile/profile-user", {
      user:user
    });
  }).catch(err =>{
    next(err);
  })
})



// export router
module.exports = router;







