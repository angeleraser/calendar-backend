const mongoose = require("mongoose"),
  databaseConnection = async () => {
    try {
      await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log("Database online...");
    } catch (error) {
      console.log(error);
      throw new Error("Error al inicializar base de datos");
    }
  };

module.exports = {
  databaseConnection,
};
