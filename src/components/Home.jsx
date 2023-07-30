import React from "react";  
import { useState, useEffect, useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass, faBagShopping, faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
import { HomeContext } from "../context/HomeContext";
import Categories from "../components/Categories";
import ItemsDisplay from "./ItemsDisplay";
import CartItems from "./CartItems";
import SearchBar from "./SearchBar";

function Home(){

  const {showCart, setShowCart, cartItems, total, setShowSearch, showSearch} = useContext(HomeContext);
  

return (
    <>
    <div className='topNav'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="fa" 
      onClick={() => { setShowSearch(true); (showSearch)}}/>
        <h1>NYX</h1>
        <span className="ShoppingCartHolder"  onClick={() => {if(!showSearch){setShowCart('100vw')}}}>
        <span className="Counter" >
            <h1>{cartItems.length}</h1>
        </span>
        <FontAwesomeIcon icon={faBagShopping} className="fa"/>
        </span>
        {showCart !== '0vw' && <div className="cart" style={{minWidth: `${showCart}`, maxWidth: `${showCart}`}} >
          <div className="cart--Nav">
            <button className="empty--button"
              onClick={() => setShowCart('0vw')}> <FontAwesomeIcon icon={faArrowLeftLong} className="fa" /> </button>
            <h1>Cart</h1>
          </div>
        <div className='cart--items'>
        {cartItems != null && cartItems.map((item) => {
                return <CartItems item={item}/>
            })}

        </div>
        <span className="price--container">
          <p>Total price:</p>
          <h1>{total}$</h1>
        </span>
        {showCart === '100vw' && <button className="pay--button">Pay</button>}
        
        </div>}
        
        {showSearch && <SearchBar />}
      </div>
     <Categories />
     <ItemsDisplay />
     </>
)
}

export default Home;