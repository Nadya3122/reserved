import React, {useContext} from "react";
import './Header.css'
import logo from './logo1.png'
import MyButton from "../UI/Button/MyButton";
import {Link} from "react-router-dom";
import {AuthContext} from "../context";

const Header = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        isAuth
            ?
            <nav>
                <a href="/"><img src={logo} alt="logo"/></a>
                <Link to="/account"><MyButton
                    style={{fontSize: '14px', right: '10rem', position: 'absolute'}}>Account</MyButton></Link>
                <Link to=""><MyButton style={{fontSize: '14px', right: '3rem', position: 'absolute'}} onClick={logout}>Log
                    out</MyButton></Link>
            </nav>

            :
            <nav>
                <a href="/"><img src={logo} alt="logo"/></a>
                <Link to='/registration'>
                    <MyButton
                        style={{fontSize: '14px', right: '10rem', position: 'absolute'}}>Registration</MyButton></Link>
                <Link to='/login'>
                    <MyButton style={{fontSize: '14px', right: '3rem', position: 'absolute'}}>Log in</MyButton>
                </Link>
            </nav>
    )
}

export default Header;