import React from "react";
import './Header1.css';
import logo from './logo1.png';
import './Header4.css'

const Header4 = () =>{

    return(
        <nav>
            <a href="/"><img src={logo} alt="logo"/></a>
            <a href="/account"><button className="log">Account</button></a>
        </nav>
    )
}

export default Header4;