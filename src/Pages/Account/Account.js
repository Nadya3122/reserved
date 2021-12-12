import React from 'react';
import style from './Account.module.css';
import MyInput from "../../components/UI/Input/MyInput";
import MyButton from "../../components/UI/Button/MyButton";
import ItemBook from "../../components/ItemBook/ItemBook";
import Header from "../../components/Headers/Header";

const Account = () => {
    return (
        <div>
            <Header/>
            <div className={style.Inf} >
                <h3 >Personal Information</h3>
                <p>Name</p>
                <MyInput style={{background:'gray'}} type="text" name="name"/>
                <p>Phone</p>
                <MyInput style={{background:'gray'}} type="tel" name="phone"/>
                <p>E-mail </p>
                <MyInput style={{background:'gray'}} type="text" name="e-mail"/>
                <br/>
                <MyButton style={{fontSize:'14px'}}>Save</MyButton>
            </div>
            <div className={style.Book}>
                <h3 >Current Booking</h3>
                <ItemBook/>
                <ItemBook/>
            </div>
        </div>
    );
};

export default Account;