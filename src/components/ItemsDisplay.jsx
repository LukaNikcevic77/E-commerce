import React from "react";  
import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../context/HomeContext";

function ItemsDisplay(){

    const {items} = useContext(HomeContext);

    useEffect(() => {console.log(items)}, [items])


return (
    <>
        <div className="items-grid">
            {items != null && items.slice(0, 100).map((item) => {
                return <div className="item"> 
                <img src={item.image_link} alt="" />
                <p>{item.brand}</p> <p>{item.name}</p>
                <p>{item.price}{item.price_sign}</p>
                </div>
            })}

     <div className="es"></div>
        </div>
        
     </>
)

}

export default ItemsDisplay;