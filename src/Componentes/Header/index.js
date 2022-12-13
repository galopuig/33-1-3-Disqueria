/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from "react";
import Logo from "../../imagess/logo.jpg"
import {Link} from "react-router-dom";
import {DataContext} from "../../context/Dataprovider";


export const Header = () => {
const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [carrito] = value.carrito


const toogleMenu= () =>{
  setMenu(!menu)
}


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
      <div className="cart" onClick= {toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  );
};