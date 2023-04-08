const jwt = require("jsonwebtoken");
const user = require("../models/userModel");

const createToken = (_id) => {
  jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
//login user
const login = async (req, res) => {
  res.json({ msg: " Log in user" });
};
//signup user

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  res.json({ msg: "Sign Up user" });
};

module.exports = { signup, login };
