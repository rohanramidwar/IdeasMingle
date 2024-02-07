import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();

    res.status(200).json({
      success: true,
      data: savedPost,
      message: "post created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "error while creating post",
      message: err.message,
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("comments").exec();

    res.status(200).json({
      success: true,
      data: posts,
      message: "all posts retrieved successfully.",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "error while fetching posts",
      message: err.message,
    });
  }
};
