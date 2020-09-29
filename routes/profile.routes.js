const express = require('express');
const router  = express.Router();
const User = require('../models/User.model')

//Route d'affichage de mon userProfile
router.get('/userProfile', (req, res, next) => {
  res.render("profile/profile-user", {
    userInSession: req.session.CurrentUser
  })
})


//Route d'affichage de mon account settings
router.get('/userProfile/:id/accountSettings', (req, res, next) => {
  res.render("profile/account-settings")
})

//Route de traitement de mon formulaire account settings
router.post('/userProfile/:id/accountSettings', (req, res, next) => {
  const {username, email, password} = req.body;

  User.findByIdAndUpdate({
    username,
    email,
    password,
    photoUser: req.file.path
  }).then(modifyAccountFromDB => {
    newAccount: modifyAccountFromDB;
  }).catch(err =>{
    next(err);
  })
})








// export router
module.exports = router;