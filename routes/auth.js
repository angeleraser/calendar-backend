const express = require("express"),
  { validateJsonWebToken } = require("../middlewares/jwt-validator"),
  router = express.Router(),
  { register, renewToken, loginUser } = require("../controllers/auth"),
  { check } = require("express-validator"),
  { fieldsValidator } = require("../middlewares/fill-validator");

// --------- API endpoints --------- \\

// Register
router.post(
  "/register",
  [
    // middlewares
    check("name", "Name is required.").not().isEmpty(),
    check("password", "Password should be at least six characters.").isLength({
      min: 6,
    }),
    check("email", "Email is required").isEmail(),
    fieldsValidator,
  ],
  register
);
// Login
router.post(
  "/",
  [
    // middlewares
    check("password", "Password should be at least six characters ").isLength({
      min: 6,
    }),
    check("email", "Email is required").isEmail(),
    fieldsValidator,
  ],
  loginUser
);
// Renew token
router.get("/renew-token", validateJsonWebToken, renewToken);

// Exportar en node
module.exports = router;
