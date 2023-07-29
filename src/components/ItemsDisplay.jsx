import React from "react";  
import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../context/HomeContext";

function ItemsDisplay(){

    const {items} = useContext(HomeContext);

    useEffect(() => {console.log(items)}, [items])

    const descriptionCutter = (a) => {

        const pattern = /^(.*?[.!?])/;

        const match = a.match(pattern);

        const result = match ? match[1] : a;

        return result;
    }


return (
    <>
        <div className="items-grid">
            {items != null && items.slice(0, 100).map((item) => {
                return <div className="item"> 
                <div className="left-block">

                <img src={item.image_link} alt="" />
                </div>
                <div className="right-block">
                <span className="name-desc">
 
                 <p className="product--name">{item.name.toUpperCase()}</p>
                <p className="product--desc ">{descriptionCutter(item.description)}</p>

                    </span>

                    <span>
                <button className="add--To--Cart">

                <p>{item.price}{item.price_sign}</p>
                </button>
                    </span>
                </div>

                </div>
            })}

     <div className="es"></div>
        </div>
        
     </>
)

}

export default ItemsDisplay;