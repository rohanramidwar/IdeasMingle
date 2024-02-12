import { AUTH, LOG_OUT } from "../constants/actionTypes";

const auth = (state = { authData: null }, action) => {
  const { type } = action;

  switch (type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case LOG_OUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default auth;
