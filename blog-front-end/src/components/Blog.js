import React from "react";
// import natute1 from "../assets/natute1.jpg";
import "./Blog.css";
export const Blog = () => {
   return (
      <div className="blog-page">
         <img
            className="blog-img col-10 "
            src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg"
         />
         <div className="blog-main">
            <h1>Title</h1>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
               perferendis aspernatur eius earum laboriosam amet enim nisi
               consequatur delectus? Sint vitae deserunt laudantium asperiores
               accusamus necessitatibus consequatur eos eius quisquam ut porro
               eveniet perspiciatis voluptatem vel vero libero, facere adipisci.
            </p>
         </div>
      </div>
   );
};
