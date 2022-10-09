import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./Home.js";
import About from "./About.js";
import Search from "./Search.js";
import "./App.css";



export default function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
);
  }
 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
