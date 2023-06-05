import './App.css';
import Posts from "./components/posts";
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
      <div className="container-fluid">
          <Navbar />
          <div className="container">
              <Outlet />
          </div>
      </div>

  );
}

export default App;