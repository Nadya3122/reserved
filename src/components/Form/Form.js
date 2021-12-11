import React from 'react';
import './Form.css'
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

const Form = () => {
    return (
        <div className="book">
            <form action="">
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