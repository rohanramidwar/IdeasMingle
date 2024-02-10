import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "./actions/postActions";
import Blog from "./components/Blog";
import CreateForm from "./components/CreateForm";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <div>
      <CreateForm />
      <div>
        <Blog />
      </div>
    </div>
  );
};

export default App;
