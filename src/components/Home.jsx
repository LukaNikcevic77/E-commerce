import React from "react";  
import { useState, useEffect, useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass, faBagShopping} from "@fortawesome/free-solid-svg-icons"
import Categories from "../components/Categories";
import ItemsDisplay from "./ItemsDisplay";
function Home(){
return (
    <>
    <div className='topNav'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="fa" />
        <h1>D'alma</h1>
        <span className="ShoppingCartHolder">
        <span className="Counter">
            <h1>5</h1>
        </span>
        <FontAwesomeIcon icon={faBagShopping} className="fa"/>
        </span>
      </div>
     <Categories />
     <ItemsDisplay />
     </>
)
}

export default Home;