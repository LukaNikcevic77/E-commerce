import React from "react";  
import { useState, useEffect, useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass, faBagShopping, faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
import { HomeContext } from "../context/HomeContext";
import Categories from "../components/Categories";
import ItemsDisplay from "./ItemsDisplay";
function Home(){
return (
    <>
    <div className='topNav'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="fa" />
        <h1>NYX</h1>
        <span className="ShoppingCartHolder" >
        <span className="Counter">
            <h1>5</h1>
        </span>
        <FontAwesomeIcon icon={faBagShopping} className="fa"/>
        </span>
        <div className="cart" >
          <div className="cart--Nav">
            <button className="empty--button"> <FontAwesomeIcon icon={faArrowLeftLong} className="fa" /> </button>
            <h1>Cart</h1>
          </div>
        <div className="cart--items"></div>
        <span className="price--container">
          <p>Total price:</p>
          <h1>50$</h1>
        </span>
        <button className="pay--button">Pay</button>
        </div>
      </div>
     <Categories />
     <ItemsDisplay />
     </>
)
}

export default Home;