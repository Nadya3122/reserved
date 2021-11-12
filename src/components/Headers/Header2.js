import React from "react";
import './Header1.css'
import logo from './logo1.png'

const Header2 = () =>{

    return(
        <nav>
            <a href="/"><img src={logo} alt="logo"/></a>
            <a href="/registration"><button className="reg">Registration</button></a>
        </nav>
    )
}

export default Header2;