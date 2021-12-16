const router = require("express").Router();
const {
  models: { Post },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    next(err);
  }
});

module.exports = router;
