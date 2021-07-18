import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
   const [cats, setCats] = useState([]);

   useEffect(() => {
      const getCats = async () => {
         const res = await axios.get("/categories");
         setCats(res.data);
      };
      getCats();
   }, []);
   return (
      <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT</span>
            <img
               src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt=""
               style={{ width: 300 }}
            />
            <p>FullStack MERN Blog Application</p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
               {cats.map((c) => (
                  <Link to={`/?cat=${c.name}`} className="link">
                     <li className="sidebarListItem">{c.name}</li>
                  </Link>
               ))}
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">CONTACT ME</span>
            <div className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-square"></i>
               <i className="sidebarIcon fab fa-twitter-square"></i>
               <i className="sidebarIcon fab fa-github-square"></i>
               <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
         </div>
      </div>
   );
}
