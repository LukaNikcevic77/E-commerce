import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HomeContext = createContext(null);
export const HomeContextProvider = (props) => {

    const getItems = (prevCategory, b) => {
        console.log("This is b:", b);

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
    const addItem = (a) => {
        const index = cartItems.findIndex((item) => a.id == item.id);
        console.log("Index:", index)
        
        if(index != -1){
            
            let fakeArray = [...cartItems];
            fakeArray[index].quantity += 1;
            setCartItems(fakeArray);
            const newPrice = Number(a.price) + total;
            setTotal(newPrice);
        }
        else {
            let newItem = a;
            newItem.quantity = 1;
            let fakeArray = [...cartItems, newItem];
            setCartItems(fakeArray);
        
            const newPrice = Number(a.price) + total;
            setTotal(newPrice);
            
        }
        
        console.log("real:", cartItems);
    }
    const removeItem = (a) => {
        const index = cartItems.findIndex((item) => a.id == item.id);
        console.log("Index:", index)
        let fakeArray = [...cartItems];
        
        if(fakeArray[index].quantity == 1){
            
            fakeArray.splice(index, 1);
            setCartItems(fakeArray);
            const newPrice =  total - Number(a.price);
            setTotal(newPrice);
        }
        else {
            fakeArray[index].quantity -= 1;
            setCartItems(fakeArray);
        
            const newPrice =  total - Number(a.price);
            setTotal(newPrice);
            
        }
        
        console.log("real:", cartItems);
    }
    useEffect(() => {
        getItems(prevCategory, '');
    }, [])

const contextValue={items, showCart, 
    setShowCart, cartItems, total, 
    addItem, removeItem, prevCategory, getItems}

return <HomeContext.Provider value={contextValue}>
    {props.children}
</HomeContext.Provider>

}