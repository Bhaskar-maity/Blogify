const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
   try {
      const newUser = new User({
         email: req.body.email,
         password: req.body.password,
      });
      const user = newUser.save();
      res.status(200).json(user);
   } catch (err) {
      console.log(err);
   }
});

router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({
         email: req.body.email,
      });
      !user && res.status(400).json("wrong credentials");
      const validate = req.body.password === user.password;
      !validate && res.status(400).json("wrong credentials");
      const { password, ...others } = user._doc;
      res.status(200).json(others);
   } catch (err) {
      console.log(err);
   }
});

module.exports = router;
