const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("post", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tags: {
    type: Sequelize.ENUM,
    values: ["Technology", "Art", "Engineering", "Math", "Entertainment"],
  },
  author_name: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
