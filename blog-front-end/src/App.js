import { NavBar } from "./components/Nav";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Blog } from "./components/Blog";
import { BlogList } from "./components/BlogList";
import { CreateBlog } from "./components/CreateBlog";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
   return (
      <Router>
         <div className="App">
            <NavBar />
            <Switch>
               <Route exact path="/">
                  <BlogList />
               </Route>
               <Route path="/home">
                  <BlogList />
               </Route>
               <Route path="/login">
                  <Login />
               </Route>
               <Route path="/register">
                  <Register />
               </Route>
               {/* <Login /> */}
               {/* <Register /> */}
               {/* <Blog /> */}
               {/* <BlogList /> */}
               <CreateBlog />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
