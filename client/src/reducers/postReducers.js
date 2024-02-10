//reducers -> controllers
//function that accepts the state and the action
//then based on the action type do some logic
//state cannot be empty -> therefore, empty arr

const posts = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default posts;
