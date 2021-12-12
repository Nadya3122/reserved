import React from 'react';
import style from './Registration.module.css'
import MyInput from "../../components/UI/Input/MyInput";
import MyButton from "../../components/UI/Button/MyButton";
import Header from "../../components/Headers/Header";

const Registration = () => {
    return (
        <div>
            <Header/>
            <div className={style.fill}>
                <h2>Fill in the following fields</h2>
            </div>
            <form className={style.reg_form} action="">
                <MyInput placeholder="name" type="text" name="name" />
                <br/>
                <MyInput placeholder="phone" type="tel" name="phone" />
                <br/>
                <MyInput placeholder="e-mail" type="text" name="e-mail"/>
                <br/>
                <MyInput placeholder="password" type="password" name="password"/>
                <br/>
                <div>
                    <MyButton style={{fontSize:'14px'}} type="submit" name="login">Log in</MyButton>
                </div>
            </form>
        </div>
    );
};

export default Registration;
