const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const config = {
  logging: false,
};

const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, config);
module.exports = db;
