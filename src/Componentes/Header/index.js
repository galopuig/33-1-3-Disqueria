/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../imagess/logo.jpg"
import {Link} from "react-router-dom";


export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="" width="150" />
        </div>
      </Link>
      <h1>33 1/3 DISQUERIA</h1>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  );
};