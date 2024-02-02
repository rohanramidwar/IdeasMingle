const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = await Post.create({ title, body });

    res.status(200).json({
      success: true,
      data: post,
      message: "Post Created SUCCESSFULLY !",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "ERROR while creating post!",
      message: err.message,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("comments").exec();

    res.status(200).json({
      success: true,
      data: posts,
      message: "Fetched all posts Sucessfully !",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "ERROR while fetching posts!",
      message: err.message,
    });
  }
};
