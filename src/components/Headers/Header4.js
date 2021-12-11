import React from "react";
import './Header1.css';
import logo from './logo1.png';
import MyButton from "../UI/Button/MyButton";

const Header4 = () =>{

    return(
        <nav>
            <a href="/"><img src={logo} alt="logo"/></a>
            <a href="/account"><MyButton style={{fontSize: '14px', right: '3rem', position:'absolute'}}>Account</MyButton></a>
        </nav>
    )
}

export default Header4;