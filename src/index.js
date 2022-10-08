
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from ".Layout";
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import NoPage from ".NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

