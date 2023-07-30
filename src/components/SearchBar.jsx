import React from "react";  
import { useState, useEffect, useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
import { HomeContext } from "../context/HomeContext";
import axios from "axios";

function SearchBar(){

  const {url, addItem, setShowSearch} = useContext(HomeContext);

  const [db, setDb] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
    .then(res => res.data)
    .then(a => setDb(a))
    .catch(err => {
        console.error("This is error:", err);
    })
  }, [])
return (
<>
<div className="cart">
          <div className="cart--Nav">
            <input type="text" 
            className="search--Bar"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            />
          </div>
        <div className="searchable cart--items ">
        {db != null && db
        .filter((item) => {
          const searchedItem = searchValue.toLowerCase();
          const itemName = item.name.toLowerCase();
          if(searchedItem != "" && itemName.startsWith(searchedItem)){
              return item;
          }
      })
        .map((correctItem) => {
          return (
                 <div className="cart--Item"> 
                 <div className="left-block">
 
                 <img src={correctItem.image_link} alt="" className="smaller--Image"/>
                 </div>
                 <div className="right-block">
                 <span className="name-desc">
  
                  <p className="product--name">{correctItem.name.toUpperCase()}</p>
                 <p className="product--desc ">{correctItem.product_type}</p>
 
                     </span>
 
                     <span>
                 <button className="add--To--Cart orange"
                 onClick={() => addItem({id: correctItem.id, image_link: correctItem.image_link,
                 name: correctItem.name, category: correctItem.product_type, price: correctItem.price})}>
 
                 <p>{correctItem.price}{correctItem.price_sign}</p>
                 </button>
                     </span>
                 </div>
 
                 </div>
          )
            })}
            <button className="go--back" onClick={() => setShowSearch(false)}>Go back</button>
        </div>
        
        </div>
</>
)
}

export default SearchBar;