const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");

//@route    GET api/users
//@desc     Test route
//@access   Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    //see if users exits

    //get users gravatar

    //encrypt password

    //return jsonwebtoken

    res.send("User route");
  }
);

module.exports = router;
