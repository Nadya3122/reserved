import React, {useContext, useState} from 'react';
import style from './LogIn.module.css'
import MyInput from "../../components/UI/Input/MyInput";
import MyButton from "../../components/UI/Button/MyButton";
import {AuthContext} from "../../components/context";
import Header from "../../components/Headers/Header";

const LogIn = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    // const [isChecked, setIsChecked] = useState(false);

    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true');
    }
    // const handleOnChange = () => {
    //     setIsChecked(!isChecked);
    // };

    return (
        <div>
            <Header/>
            <form className={style.formLogin} onSubmit={login}>
                <h5 className={style.h5Login}>Welcome</h5>
                <MyInput
                    placeholder="login"
                    type="text"
                    name="login"/>
                <br/>
                <MyInput
                    placeholder="password"
                    type="password"
                    name="password"/>
                <br/>
                {/*<input*/}
                {/*    type="checkbox"*/}
                {/*    name="Admin"*/}
                {/*    checked={isChecked}*/}
                {/*    onChange={handleOnChange}/>*/}
                {/*<label style={{fontSize:'14px'}}>Admin</label>*/}
                {/*<br/>*/}
                <MyButton style={{fontSize:'14px'}}>log in</MyButton>
            </form>
        </div>
    );
};

export default LogIn;