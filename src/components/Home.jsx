import React from "react";  
import { useState, useEffect, useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass, faBagShopping, faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
import { HomeContext } from "../context/HomeContext";
import Categories from "../components/Categories";
import ItemsDisplay from "./ItemsDisplay";
function Home(){

  const {showCart, setShowCart, cartItems, total} = useContext(HomeContext);

return (
    <>
    <div className='topNav'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="fa" />
        <h1>NYX</h1>
        <span className="ShoppingCartHolder"  onClick={() => setShowCart('100vw')}>
        <span className="Counter" >
            <h1>{cartItems.length}</h1>
        </span>
        <FontAwesomeIcon icon={faBagShopping} className="fa"/>
        </span>
        <div className="cart" style={{minWidth: `${showCart}`, maxWidth: `${showCart}`}} >
          <div className="cart--Nav">
            <button className="empty--button"
              onClick={() => setShowCart('0vw')}> <FontAwesomeIcon icon={faArrowLeftLong} className="fa" /> </button>
            <h1>Cart</h1>
          </div>
        <div className="cart--items"></div>
        <span className="price--container">
          <p>Total price:</p>
          <h1>{total}$</h1>
        </span>
        {showCart === '100vw' && <button className="pay--button">Pay</button>}
        
        </div>
      </div>
     <Categories />
     <ItemsDisplay />
     </>
)
}

export default Home;