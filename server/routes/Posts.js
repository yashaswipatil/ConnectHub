const express = require("express");
const router = express.Router();
const {} = require('../models');
const { Posts } = require("../models");

router.get("/" , (req, res) => {
    res.json("This is posts page!")
});

router.post("/" ,async (req , res) => {
  const post = req.body
  await Posts.create(post);
  res.json(post);
})



module.exports = router;