# 1 - Crear el package.json

`npm init -y`

# 2 - Crear un archivo index.js

# 3 - Instalar un paquete de nodemon para actualizar automaticamente los cambios en el index.js

`npm i nodemon -g`

# 4 - Configurar los scripts en el package.json para iniicialzar el proyecto

```
scripts:{
"dev":"nodemon index.js"
"start":"node index.js"
}
```

# 5 - Instalar Express

`npm i express`

# 6 - Configurar Express

```
const express = require("express");

// Crear el servidor de Express
const app = express(),
  port = 4000;

// Rutas
app.get("/", (req, res) => {
  res.json({
    ok: true,
    body: {
      users: [],
      tokens: null,
      dataHandlers: null,
    },
  });
});
// Escuchar peticiones
app.listen(port, () => {
  console.log("Server running on port " + port);
});
```

# 7 - Instalar express-validator

`npm i express validator`

# 8 - Configurar base de datos en mongo atlas y en el proyecto, crear una variable de entorno para el host, instalar mongoose

`npm install mongoose`

# 9 - Configurar la creacion de JSON Web Tokens,instalar

`npm i jsonwebtoken`

```
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
```
