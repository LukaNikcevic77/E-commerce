import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HomeContext = createContext(null);
export const HomeContextProvider = (props) => {

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => res.data)
        .then(a => console.log(a))
        .catch(err => {
            console.error("This is error:", err);
        })
    }, [])

const contextValue={}

return <HomeContext.Provider value={contextValue}>
    {props.children}
</HomeContext.Provider>

}