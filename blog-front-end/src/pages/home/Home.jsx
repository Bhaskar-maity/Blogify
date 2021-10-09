import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
   const [posts, setPosts] = useState([]);
   const { search } = useLocation();
   const [toggle, settoggle] = useState(false);

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get("/posts" + search);
         setPosts(res.data);
      };
      fetchPosts();
   }, [search]);

   const handleClick = () => {
      settoggle((prevToggle) => !prevToggle);
   };
   return (
      <>
         <Header />
         <div className="home">
            <div className="chatbot_icon" onClick={handleClick}>
               <i class="fas fa-comments"></i>
            </div>
            {toggle && (
               <div className="chatbot_frame">
                  <iframe
                     title="This is a chatbot_frame"
                     allow="microphone;"
                     width="350"
                     height="430"
                     src="https://console.dialogflow.com/api-client/demo/embedded/b77d12c5-24ab-42d6-b608-af4e4e6adcbc"
                  ></iframe>
               </div>
            )}

            <Posts posts={posts} />
            <Sidebar />
         </div>
      </>
   );
}
