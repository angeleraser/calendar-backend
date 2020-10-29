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
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check(
      "password",
      "El password debe ser de al menos 6 caracteres"
    ).isLength({ min: 6 }),
    check("email", "El email es obligatorio").isEmail(),
    fieldsValidator,
  ],
  register
);
// Login
router.post(
  "/",
  [
    // middlewares
    check(
      "password",
      "El password debe ser de al menos 6 caracteres"
    ).isLength({ min: 6 }),
    check("email", "El email es obligatorio").isEmail(),
    fieldsValidator,
  ],
  loginUser
);
// Renew token
router.get("/renew-token", validateJsonWebToken, renewToken);

// Exportar en node
module.exports = router;
