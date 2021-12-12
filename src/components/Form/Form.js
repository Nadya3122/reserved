import React from 'react';
import './Form.module.css'
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";
import style from "./Form.module.css"

const Form = () => {
    return (
        <div className={style.book}>
            <form action="">
                <MyInput placeholder="date" type="date" name="date"/>
                <br/>
                <MyInput placeholder="Time from" type="time" name="Time_from"/>
                <br/>
                <MyInput placeholder="Time to" type="time" name="Time_to"/>
                <br/>
                <MyButton style={{fontSize:'14px'}} type="submit" name="login">Sent</MyButton>
            </form>
        </div>
    );
};

export default Form;