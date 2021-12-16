const router = require("express").Router();
const {
  models: { Post },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.post("/addpost", async (req, res, next) => {
  try {
    console.log(req.body, "<--------------");
    await Post.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
