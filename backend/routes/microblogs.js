import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";
import { createComment } from "../controllers/CommentController.js";
import { likePost, dislikePost } from "../controllers/LikeController.js";

const router = express.Router();

router.post("/posts/post", createPost);
router.get("/posts", getAllPosts);
router.post("/comments/create", createComment);
router.post("/likes/like", likePost);
router.post("/likes/dislike", dislikePost);

export default router;
