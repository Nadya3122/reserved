import React from 'react';
import style from "./ItemBookList.module.css";
import MyButton from "../UI/Button/MyButton";

const ItemBookList = () => {
    return (
        <div className={style.ItemBookList}>
            <p>Date: </p>
            <p>Time: </p>
            <p>Address: </p>
            <MyButton style={{display:'flex', position:'right', fontSize:'14px'}}>Accept</MyButton>
            <MyButton style={{display:'flex', position:'right', fontSize:'14px'}}>Reject</MyButton>
        </div>
    );
};

export default ItemBookList;