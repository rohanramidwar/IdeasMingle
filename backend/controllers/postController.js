const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const post = await Post.create({ title, description });

    res.status(200).json({
      success: true,
      data: post,
      message: "Entry Created SUCCESSFULLY !",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Server ERROR !",
      message: err.message,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({
      success: true,
      data: posts,
      message: "FETCHED all posts Sucessfully !",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Server ERROR !",
      message: err.message,
    });
  }
};
