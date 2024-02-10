import axios from "axios"; //used to make api calls

const url = "http://localhost:5000/posts"; //points to backend routes

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); //sends data
