import React from "react";

export const CreateBlog = () => {
   return (
      <div className="container mt-4">
         <input type="file" id="imgIp" />
         <input type="text" placeholder="Title" />

         <textarea
            placeholder="write your blog"
            type="text"
            className="ml-2 mt-4"
         ></textarea>
         <br />
         <br />
         <button className="submit">Submit</button>
      </div>
   );
};
