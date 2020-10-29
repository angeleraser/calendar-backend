const jsonWebToken = require("jsonwebtoken"),
  getJsonWebToken = (uid, name) => {
    return new Promise((resolve, reject) => {
      const payload = { uid, name };
      // Firmar el token
      jsonWebToken.sign(
        payload,
        process.env.JWT_SECRET_SEED,
        {
          expiresIn: "2h",
        },
        (error, token) => {
          if (error) {
            console.log(error);
            reject("No se pudo generar el token");
          }
          resolve(token);
        }
      );
    });
  };
module.exports = {
  getJsonWebToken,
};
