const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
// @route   GET api/profile
// @desc    Test route
// @acces   Public

router.get("/", auth, async (req, res) => {
  try {
      const profile = await Profile.findOne();
  } catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

module.exports = router;
