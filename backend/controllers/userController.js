//login user
const user = require("../models/userModel");
const login = async (req, res) => {
  res.json({ msg: " Log in user" });
};
//signup user

const signup = async (req, res) => {
  res.json({ msg: "Sign Up user" });
};

module.exports = { signup, login };
