import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HomeContext = createContext(null);
export const HomeContextProvider = (props) => {

    const [items, setItems] = useState(null);
    const [showCart, setShowCart] = useState('0vw');
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (a) => {
        const index = cartItems.findIndex((item) => a.id == item.id);
        let fakeArray = [...cartItems];
        if(index != -1){

            fakeArray[index].quantity += 1;
            setCartItems(fakeArray);
            const newPrice = Number(a.price) + total;
            setTotal(newPrice);
        }
        else {
            fakeArray.push({...a, quantity: 1});
            const newPrice = Number(a.price) + total;
            setTotal(newPrice);

        }

    }

    useEffect(() => {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
        .then(res => res.data)
        .then(a => setItems(a))
        .catch(err => {
            console.error("This is error:", err);
        })
    }, [])

const contextValue={items, showCart, setShowCart, cartItems, total, addItem}

return <HomeContext.Provider value={contextValue}>
    {props.children}
</HomeContext.Provider>

}