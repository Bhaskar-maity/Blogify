import { NavBar } from "./components/Nav";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Blog } from "./components/Blog";
import { BlogList } from "./components/BlogList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return (
      <div className="App">
         <NavBar />
         {/* <Login /> */}
         {/* <Register /> */}
         {/* <Blog /> */}
         <BlogList />
      </div>
   );
}

export default App;
