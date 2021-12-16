//This file serves as an access point for all things database related

const db = require("./db");

// Models/Tables
const User = require("./models/User");
const Post = require("./models/Post");

//associations

module.exports = {
  db,
  models: {
    User,
    Post,
  },
};
