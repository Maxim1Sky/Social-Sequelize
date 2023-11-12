const { Model, DataTypes, Sequelize } = require("sequelize");
const path = require("path");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
  logging: false,
  define: {
    timestamps: false,
  },
});

//db.authenticate();

module.exports = { db, DataTypes, Model };
