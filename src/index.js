
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from ".Layout";
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import NoPage from ".NoPage";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
