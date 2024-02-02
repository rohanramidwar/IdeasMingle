//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//business logic
exports.likePost = async (req, res) => {
  try {
    //fetch
    const { post, user } = req.body;
    //creates obj
    let like = new Like({ post, user });
    //save in db
    const savedLike = await like.save();
    //update the number of likes on that post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "ERROR while liking post!",
      message: err.message,
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //find and delete from like collection
    const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });
    //update post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deleteLike._id } },
      { new: true }
    );
    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "ERROR while unliking post!",
      message: err.message,
    });
  }
};
