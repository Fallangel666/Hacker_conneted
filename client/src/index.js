// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import About from "./About.js";
import Search from "./Search.js";
import Home from "./Home.js"
import Login from "./Login.js"
import Signup from "./Signup.js";


export default function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
);
  }
 
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
