import React from "react";
import './Header1.css'
import logo from './logo1.png'
import MyButton from "../UI/Button/MyButton";

const Header3 = () =>{

    return(
        <nav>
            <a href="/"><img src={logo} alt="logo"/></a>
            <a href="/login"><MyButton style={{fontSize: '14px', right: '3rem', position:'absolute'}}>Log in</MyButton></a>
        </nav>
    )
}

export default Header3;