const { response } = require("express"),
  { validationResult } = require("express-validator");
const fieldsValidator = (req, resp = response, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    resp.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  } else {
    next();
  }
};

module.exports = {
  fieldsValidator,
};
