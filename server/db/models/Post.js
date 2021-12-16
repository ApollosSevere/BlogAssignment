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
  edit_date: {
    type: Sequelize.DATE,
  },
});

module.exports = User;
