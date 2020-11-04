const { response } = require("express"),
  jwt = require("jsonwebtoken"),
  validateJsonWebToken = (req, res = response, next) => {
    // x-token
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "There is not token in the request.",
      });
    } else {
      //validar el token si existe
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_SEED);
        req.uid = payload.uid;
        req.name = payload.name;
      } catch (error) {
        return res.status(401).json({
          ok: false,
          msg: "Invalid token",
        });
      }
    }

    next();
  };

module.exports = {
  validateJsonWebToken,
};
