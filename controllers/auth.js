const { response } = require("express"),
  User = require("../models/User"),
  bcrypt = require("bcryptjs");
const { getJsonWebToken } = require("../helpers/jwt");
const {
  serverError,
  clientError,
  successRequest,
} = require("../helpers/response-status");
// Aqui se crea un usuario
const register = async (req, resp = response) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }); // para validar si existe o no un usuario con el mismo correo
    if (user) {
      return clientError(resp).status(401).body({ msg: "El correo ya existe" });
    } else {
      // Crea un nuevo usuario y lo guarda en la base de datos
      user = new User(req.body);
      // Encriptar password antes de guardar el usuario
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(password, salt);
      await user.save();
      // Generar JWT
      const token = await getJsonWebToken(user.id, user.name);
      return successRequest(resp)
        .status(201)
        .body({ uid: user.id, name: user.name, token });
    }
  } catch (error) {
    return serverError(resp).status(500).body({
      msg: "Hable con el administrador...",
    });
  }
};

// Loguear el usuario
const loginUser = async (req, resp = response) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return clientError(resp).status(401).body({
        msg: "El usuario no existe con ese email",
      });
    } else {
      // Confirmar los passwords
      const validPassword = bcrypt.compareSync(password, user.password); //compara el password introducido en el formularion con el de la base de datos
      if (!validPassword) {
        return clientError(resp).status(400).body({
          msg: "Password incorrecto",
        });
      } else {
        // Generar JWT
        const token = await getJsonWebToken(user.id, user.name);
        return successRequest(resp).status(200).body({
          name: user.name,
          uid: user.id,
          token,
        });
      }
    }
  } catch (error) {
    return serverError(resp).status(500).body({
      msg: "Hable con el administrador...",
    });
  }
};

// Renovar el token de sesion del usuario
const renewToken = async (req, resp = response) => {
  const { name, uid } = req;
  const token = await getJsonWebToken(uid, name);
  return successRequest(resp).status(200).body({
    name,
    uid,
    token,
  });
};
module.exports = {
  register,
  loginUser,
  renewToken,
};
