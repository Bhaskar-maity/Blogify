import { useState } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
   const { user } = useContext(Context);
   const [toggle, settoggle] = useState(false);

   const handleClick = () => {
      settoggle((prevToggle) => !prevToggle);
   };

   return (
      <Router>
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
         <TopBar />

         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="/register">{user ? <Home /> : <Register />}</Route>
            <Route path="/login">{user ? <Home /> : <Login />}</Route>
            <Route path="/write">{user ? <Write /> : <Register />}</Route>
            <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
            <Route path="/post/:postId">
               <Single />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
