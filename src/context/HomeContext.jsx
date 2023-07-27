import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HomeContext = createContext(null);
export const HomeContextProvider = (props) => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
        .then(res => res.data)
        .then(a => setItems(a))
        .catch(err => {
            console.error("This is error:", err);
        })
    }, [])

const contextValue={items}

return <HomeContext.Provider value={contextValue}>
    {props.children}
</HomeContext.Provider>

}