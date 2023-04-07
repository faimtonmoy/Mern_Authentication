//login user
const user = require("../models/userModel");
const login = async (req, res) => {
  res.json({ msg: " Log in user" });
};
//signup user

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  res.json({ msg: "Sign Up user" });
};

module.exports = { signup, login };
