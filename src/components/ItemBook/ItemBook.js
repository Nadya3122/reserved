import React from 'react';
import style from './ItemBook.module.css'
import MyButton from "../UI/Button/MyButton";
const ItemBook = () => {
    return (
        <div className={style.ItemBook}>
            <p>Date: </p>
            <p>Addres</p>
            <MyButton style={{display:'flex', position:'right', fontSize:'14px'}}>Cancle</MyButton>
        </div>
    );
};

export default ItemBook;