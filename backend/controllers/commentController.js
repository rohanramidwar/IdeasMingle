import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";

export const createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const comment = new Comment({ post, user, body });
    const savedComment = await comment.save();

    //update post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true } //returns updated post
    )
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "comment created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "error while creating comment",
      message: err.message,
    });
  }
};
