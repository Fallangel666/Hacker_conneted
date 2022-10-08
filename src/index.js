<<<<<<< HEAD
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import Home from "./Home.js";
import reportWebVitals from "./reportWebVitals.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About.js";
import Search from "./Search.js";
// import app from "../server.js"

const port = process.env.PORT;

// const userRoute = require("./route/profile");
// const autRoute = require("./route/aut");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
=======

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from ".Layout";
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import NoPage from ".NoPage";
>>>>>>> 80ee5d199912c2dc9d3c5bbe8c94a654d08596a4

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
