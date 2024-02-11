//reducers -> controllers
//function that accepts the state and the action
//then based on the action type do some logic
//state cannot be empty -> therefore, empty arr
import { FETCH_POSTS, CREATE_POST } from "../constants/actionTypes";

const posts = (posts = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS:
      return payload;

    case CREATE_POST:
      return [...posts, payload];

    default:
      return posts;
  }
};

export default posts;
