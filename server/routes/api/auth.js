const express = require("express");
const router = express.Router();
const bcrypt = requie("bcryptjs");
const auth = require("../../middleware/auth");
const User = require("../../models/User");

//@route    GET api/auth
//@desc     Test route
//@access   Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await (await User.findById(req.user.id)).selected("-password");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/auth
//@desc     Authenticate user & get token
//@access   Public

router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const payload = { user: { id: user.id } };

      jwt.sign(
        payload,
        config.get("jwToken"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
