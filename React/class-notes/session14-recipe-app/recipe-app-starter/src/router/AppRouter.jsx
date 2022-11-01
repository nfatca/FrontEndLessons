import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Navbar from "./../components/nav/Navbar";
import Home from "./../pages/home/Home";
import Login from "../pages/login/Login";
import About from "./../pages/about/About";
import Detail from "./../pages/detail/Detail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
