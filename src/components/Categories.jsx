import React from "react";  
import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../context/HomeContext";
function Categories(){

    const {prevCategory, getItems} = useContext(HomeContext);

return (
    <div className='categories'>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'mascara')}>
            <p>Mascara</p>
        </span>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'eybrow')}>
            <p>Eyebrow</p>
        </span>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'eyeliner')}>
            <p>Eyeliner</p>
        </span>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'foundation')}>
            <p>Foundation</p>
        </span>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'bronzer')}>
            <p>Bronzer</p>
        </span>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'blush')}>
            <p>Blush</p>
        </span>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'lipstick')}>
            <p>Lipstick</p>
        </span>
        <span className="Categorie" onClick={() => getItems(prevCategory, 'eyeshadow')}>
            <p>Eyeshadow</p>
        </span>
      </div>
)
}

export default Categories;