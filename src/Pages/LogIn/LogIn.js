import React from 'react';
import './LogIn.css'
import Header2 from "../../components/Headers/Header2";
import MyInput from "../../components/UI/Input/MyInput";
import MyButton from "../../components/UI/Button/MyButton";
const LogIn = () => {
    return (
        <div>
            <Header2/>
            <form action="">
                <h5>Welcome</h5>
                <MyInput placeholder="login" type="text" name="login" value=""/>
                <br/>
                <MyInput placeholder="password" type="password" name="password" value=""/>
                <br/>
                <MyButton style={{fontSize:'14px'}}>log in</MyButton>
            </form>
        </div>
    );
};

export default LogIn;