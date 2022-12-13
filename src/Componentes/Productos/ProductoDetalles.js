/* eslint-disable array-callback-return */
import React, {useContext, useState, useEffect} from "react";
import {DataContext} from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";



export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState ([])
    const params = useParams();
    const addCarrito = value.addCarrito;
   



   useEffect(() =>{
    productos.forEach (producto =>{
        
        
        if (producto.id === parseInt(params.id)){
            setDetalle(producto)
            

        }
    })
   },[params.id, productos])

    return(
        <>
        {
            <div className="detalles">
                <h2>{detalle.title}</h2>
                <p className="price">${detalle.price}</p>
                <div className="grid">
                    <p className="nuevo">Nuevo</p>
                    </div>

                <button onClick={()=>addCarrito(detalle.id)}>Añadir al 
                Carrito</button>
                {
                <img src={detalle.image} alt={detalle.title} />
                }

                <div className="description">
                    <p><b>Descripción</b> Lorem ipsum dolor sit ame consectetur adipisicing elit.
                    saepe magnam corrupti, molestias rem ea corporis, nesciunt ipsam consequatur hir
                    alias accusamus, vero suscipit culpa libero eveniet sint fugiat deseunrt
                    repellendus <br/> <br/> Lorem ipsum dolor sit ame consectetur adipisicing elit.
                    saepe magnam corrupti, molestias rem ea corporis, nesciunt ipsam consequatur hir
                    alias accusamus, vero suscipit culpa libero eveniet sint fugiat deseunrt
                    repellendus</p>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>

        }


        <h2 className="relacionados">Productos Relacionados</h2>
        <div className="productos">
            {productos.map((producto) => {               
                 if(detalle.category === producto.category){

                    return <ProductoItem
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    category={producto.category}
                    cantidad={producto.cantidad}
                />
                }
            })
            }
            </div>

</>
)
}
