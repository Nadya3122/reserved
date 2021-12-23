import React from 'react';
import './Item.modules.css';
import {useNavigate} from "react-router-dom";

const Item = (props) => {

    const navigate = useNavigate();
    function click(){
        navigate(`/catalog/${props.post.id}`);
    }
    return (
        <div className="card">
            {/*<img src={props.post.picture} alt="item"/>*/}
            <img src={process.env.PUBLIC_URL + "/img/"+props.post.picture + ".png"} alt="item"/>
            <button className="cardName" onClick={click}>{props.post.name}</button>
        </div>
    );
};

export default Item;