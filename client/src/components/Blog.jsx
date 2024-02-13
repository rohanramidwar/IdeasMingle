import React from "react";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../actions/likeActions";

const Blog = ({ id, title, description, creator, likeCount, createdAt }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(id));
  };
  const handleUnlike = () => {
    dispatch(unlikePost(id));
  };
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{creator}</p>
      <p>{createdAt}</p>
      <button onClick={handleLike}>Like{likeCount}</button>
      <button onClick={handleUnlike}>Unlike</button>
    </div>
  );
};

export default Blog;
