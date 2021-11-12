import React from 'react';
import Filter from "../Filter/Filter";
import Item from "../Items_r/Item";
import Header1 from "../Headers/Header1";
import './Catalog.css';

const Catalog = () => {
    return (
        <div>
            <Header1/>
            <Filter/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
};

export default Catalog;