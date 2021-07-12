import React from "react";
import "./BlogList.css";

export const BlogList = () => {
   return (
      <div className="container mt-5 blogList-main">
         <div className="row">
            <div className="row col-sm-4 col-md-12 blog-list">
               <img
                  className="blog-img col-md-4"
                  src="https://images.pexels.com/photos/8623492/pexels-photo-8623492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
               />

               <div className="blog-body col-md-8">
                  <h2>Title</h2>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Similique ex vel fugiat dignissimos non blanditiis nulla
                     excepturi cumque porro eligendi!
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
