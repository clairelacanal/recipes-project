const express = require('express');
const router  = express.Router();

const User = require('../models/User.model')
const fileUploader = require('../configs/cloudinary.config');


//Route d'affichage de mon userProfile
router.get('/userProfile',(req, res, next) => {
  res.render("profile/profile-user", {
    user: req.session.CurrentUser
  })
})


//Route d'affichage de mon account settings
router.get('/userProfile/:id/account-settings',fileUploader.single('image'),(req, res, next) => {
  User.findById(req.params.id).then((user) => {
    res.render('profile/account-settings', {
      user:user
    })
  }).catch(err => {
    next(err)
  })
})


//Route de traitement de mon formulaire account settings
router.post('/userProfile/:id/account-settings', fileUploader.single('image'),(req, res, next) => {
  const {username, email, password} = req.body;

  let photoUser;
  if (req.file) {
    photoUser = req.file.path;
  } else {
    photoUser = req.body.existingImage;
  }


  User.findByIdAndUpdate(req.params.id,{
    username,
    email,
    password,
    photoUser
  },{ new: true }).then((userUpdated) => {
    res.render("profile/profile-user", {
      userUpdated
    });
  }).catch(err =>{
    next(err);
  })
})



// export router
module.exports = router;







