import React, { useState, useEffect } from "react";
import "./BlogList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const BlogList = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get("/post");
         setPosts(res.data);
      };
      fetchPosts();
   }, []);

   return posts.map((post) => {
      return (
         <div className="container mt-5 blogList-main">
            <div className="row">
               <div className="row col-sm-4 col-md-12 blog-list">
                  <img
                     className="blog-img col-md-4"
                     src="https://images.pexels.com/photos/8623492/pexels-photo-8623492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  />

                  <div className="blog-body col-md-8">
                     <Link className="Link" to={`/post/${post._id}`}>
                        <h2>{post.title}</h2>
                     </Link>
                     <p>{post.desc}</p>
                  </div>
               </div>
            </div>
         </div>
      );
   });
};
