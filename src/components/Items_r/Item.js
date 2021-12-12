import React from 'react';
import ex_photo from './ex_photo.png';
import './Item.css'
import {Link} from "react-router-dom";

const Item = () => {
    return (
        <div className="card">
            <img src={ex_photo} alt="item"/>
            <Link to="/booking">Restaurant</Link>
        </div>
    );
};

export default Item;