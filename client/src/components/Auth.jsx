import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../actions/authActions";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setisSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const switchMode = () => {
    setisSignup(!isSignup);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div>
            <input name="firstName" type="text" onChange={handleChange} />
            <input name="lastName" type="text" onChange={handleChange} />
          </div>
        )}
        <input name="email" type="email" onChange={handleChange} />
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">{isSignup ? "Sign up" : "Sign in"} </button>
        <div role="button" className="cursor-pointer" onClick={switchMode}>
          {isSignup ? "Already a user? Sign in" : "new user? Sign up"}{" "}
        </div>
      </form>
    </div>
  );
};

export default Auth;
