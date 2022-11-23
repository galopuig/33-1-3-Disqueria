import React from "react"
import {Link} from "react-router-dom";
import Portada from "../../imagess/banner.jpg";


export const Inicio= () => {
    return (
        <div className="Inicio">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>

            <Link to="/productos">
            <h1>Productos</h1>
            </Link>
           <img src={Portada} alt=""/>
            
        </div>
    )
}