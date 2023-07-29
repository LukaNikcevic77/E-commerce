import React from "react";  
import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../context/HomeContext";

function CartItems(props){

    const {addItem, removeItem} = useContext(HomeContext);

    


return (
    <>
         <div className="cart--Item"> 
                <div className="left-block">

                <img src={props.item.image_link} alt="" />
                </div>
                <div className="right-block">
                <span className="name-desc">
 
                 <p className="product--name">{props.item.name.toUpperCase()}</p>
                <p className="product--desc ">{props.item.category}</p>

                    </span>

                    <span className="pricing--quantity">
                        <span className="price--Span">

                    <p>{props.item.price}$</p>
                        </span>
                        <button className="remove--Quantity"
                        onClick={() => removeItem({id: props.item.id, image_link: props.item.image_link,
                            name: props.item.name, category: props.item.product_type, price: props.item.price})}>
                                <p>
                                -
                                    </p>  
                                    </button>
                                    <p>{props.item.quantity}</p>
                <button className="add--Quantity"
                onClick={() => addItem({id: props.item.id, image_link: props.item.image_link,
                name: props.item.name, category: props.item.product_type, price: props.item.price})}>
                    <p>
                                +
                                    </p> 
                </button>
                    
                
                    </span>
                </div>

                </div>

       
        
     </>
)

}

export default CartItems;