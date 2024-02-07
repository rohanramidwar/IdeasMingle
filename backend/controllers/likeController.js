import Like from "../models/likeModel.js";
import Post from "../models/postModel.js";

export const likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const savedLike = await like.save();

    //update post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "liked post successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "error while liking post",
      message: err.message,
    });
  }
};

export const dislikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //delete like from like collection
    const dislike = await Like.findOneAndDelete({ post: post, _id: like });
    //update post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: dislike._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "disliked post successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "error while disliking post",
      message: err.message,
    });
  }
};
