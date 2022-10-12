import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container_navbar">
      <div className="abc">
        <img
          src="https://media.fenerbahce.org/FB/media/FB/Images/Logo/logo.png?ext=.png"
          alt=""
          className="fbImg"
        />
        <h1 className="header"> Fenerbahçe Page</h1>
        <img
          src="https://media.fenerbahce.org/FB/media/FB/Images/Logo/logo.png?ext=.png"
          alt=""
          className="fbImg"
        />
      </div>
      <ul className="ul_list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Athletes</a>
        </li>
        <li>
          <a href="#">Staff</a>
        </li>
        <li>
          <a href="#">Fixture</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
