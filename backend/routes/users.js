const express = require("express");

const router = express.Router();
const { login, signup } = require("../controllers/userController");

//login route
router.post("/login", login);

//signup route
router.post("/login", signup);

module.exports = router;
