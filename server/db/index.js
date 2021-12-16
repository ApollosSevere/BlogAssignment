//This file serves as an access point for all things database related

const db = require("./db");

// Models/Tables
const User = require("./models/User");

//associations

module.exports = {
  db,
  models: {
    User,
  },
};
