import React from "react";
import { useSelector } from "react-redux";
import CreateForm from "../components/CreateForm";
import Blog from "../components/Blog";
import moment from "moment";

const Home = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div>
      <CreateForm />
      <div>
        {posts.map((post) => (
          <Blog
            key={post._id}
            id={post._id}
            title={post.title}
            description={post.description}
            creator={post.creator}
            likeCount={post.likes.length}
            createdAt={moment(post.createdAt).fromNow()}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
