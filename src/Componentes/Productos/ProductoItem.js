/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from "react"
import { Link } from "react-router-dom";

import { DataContext } from "../../context/Dataprovider";

export const ProductoItem = ({
    
    id,
    title,
    price,
    image,
    category,
    cantidad,
}) =>{

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;



    return (
    
        <div className="producto">
        <Link to={`/producto/${id}`}>
        <div className="producto__img">
            <img src={image} alt={title}/>
        </div>
        </Link>
        
        <div className="producto__footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="price">${price}</p>
        </div>

        <div className="buttom">
            <button className="button" onClick={() => addCarrito(id)}>
                Añadir Al Carrito
            </button>
            <div>
            <Link to={`/producto/${id}`} className="btn">Vista
            </Link>
            </div>
        </div>
    
</div>
    )
}