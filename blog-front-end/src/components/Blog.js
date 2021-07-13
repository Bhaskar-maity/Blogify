import React, { useEffect, useState } from "react";
// import natute1 from "../assets/natute1.jpg";
import "./Blog.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const Blog = () => {
   const [post, setPost] = useState({});
   const location = useLocation();
   const path = location.pathname.split("/")[2];
   useEffect(() => {
      const fetchPost = async () => {
         const res = await axios.get(`/post/${path}`);
         setPost(res.data);
      };
      fetchPost();
   }, [path]);

   return (
      <div className="blog-page">
         <img
            className="blog-img col-10 "
            src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg"
         />
         <div className="blog-main">
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
         </div>
      </div>
   );
};
