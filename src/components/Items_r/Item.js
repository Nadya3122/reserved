import React from 'react';
import ex_photo from './ex_photo.png';
import './Item.css'

const Item = () => {
    return (
        <div className="card">
            <img src={ex_photo} alt="item"/>
            <a href="/booking">Restaurant</a>
        </div>
    );
};

export default Item;