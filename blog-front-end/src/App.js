import { NavBar } from "./components/Nav";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return (
      <div className="App">
         <NavBar />
         {/* <Login /> */}
         <Register />
      </div>
   );
}

export default App;
