const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// GET route pour login 
router.get("/login", (req, res, next) => {
  res.render("auth/login")
});



// export router
module.exports = router;