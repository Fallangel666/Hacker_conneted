import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import App from "./App.js";
import About from "./About.js";
import Search from "./Search.js";
import reportWebVitals from "./reportWebVitals.js";
// import App from "./App.js";
// import NoPage from "./NoPage";

import * as React from "react";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Search />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
