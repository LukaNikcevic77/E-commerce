import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HomeContext = createContext(null);
export const HomeContextProvider = (props) => {


  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx';

    const getItems = (prevCategory, b) => {
      

        if(b === '' || prevCategory === b){
            axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
            .then(res => res.data)
            .then(a => setItems(a))
            .catch(err => {
                console.error("This is error:", err);
            })
            setPrevCategory('');

        }
        else {
            axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=' + b)
            .then(res => res.data)
            .then(a => setItems(a))
            .catch(err => {
                console.error("This is error:", err);
            })
            setPrevCategory(b);
        }
    }

    const [items, setItems] = useState(null);
    const [showCart, setShowCart] = useState('0vw');
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [prevCategory, setPrevCategory] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const addItem = (a) => {
        const index = cartItems.findIndex((item) => a.id === item.id);
        
      
        const priceInCents = Math.round(parseFloat(a.price) * 100); // Convert price to cents
        let newTotalInCents = total * 100; // Convert total to cents
      
        if (index !== -1) {
          let fakeArray = [...cartItems];
          fakeArray[index].quantity += 1;
          setCartItems(fakeArray);
      
          newTotalInCents += priceInCents;
          setTotal(newTotalInCents / 100); // Convert total back to dollars (with two decimal places)
        } else {
          let newItem = { ...a, quantity: 1 };
          let fakeArray = [...cartItems, newItem];
          setCartItems(fakeArray);
      
          newTotalInCents += priceInCents;
          setTotal(newTotalInCents / 100); // Convert total back to dollars (with two decimal places)
        }
      
        
      };
      
      const removeItem = (a) => {
        const index = cartItems.findIndex((item) => a.id === item.id);
      
      
        if (index !== -1) {
          let fakeArray = [...cartItems];
      
          if (fakeArray[index].quantity === 1) {
            const removedItemPriceInCents = Math.round(parseFloat(a.price) * 100); // Convert price to cents
            fakeArray.splice(index, 1);
            setCartItems(fakeArray);
      
            const newTotalInCents = total * 100 - removedItemPriceInCents;
            setTotal(newTotalInCents / 100); // Convert total back to dollars (with two decimal places)
          } else {
            fakeArray[index].quantity -= 1;
            setCartItems(fakeArray);
      
            const removedItemPriceInCents = Math.round(parseFloat(a.price) * 100); // Convert price to cents
            const newTotalInCents = total * 100 - removedItemPriceInCents;
            setTotal(newTotalInCents / 100); // Convert total back to dollars (with two decimal places)
          }
        }
      
       
      };
      
    useEffect(() => {
        getItems(prevCategory, '');
    }, [])

const contextValue={items, showCart, 
    setShowCart, cartItems, total, 
    addItem, removeItem,
     prevCategory, getItems,
    url, showSearch, setShowSearch}

return <HomeContext.Provider value={contextValue}>
    {props.children}
</HomeContext.Provider>

}