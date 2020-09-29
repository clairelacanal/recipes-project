const express = require('express');
const router  = express.Router();
const fileUploader = require('../configs/cloudinary.config');

router.get('/userProfile', (req, res) => {
  res.render("profile/profile-user", {
    userInSession: req.session.CurrentUser
  })
})





// export router
module.exports = router;