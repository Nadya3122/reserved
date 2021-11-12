import React from 'react';
import './LogIn.css'
import Header2 from "../Headers/Header2";
const LogIn = () => {
    return (
        <div>
            <Header2/>
            <form action="">
                <h5>Welcome</h5>
                <input placeholder="login" type="text" name="login" value=""/>
                <br/>
                <input placeholder="password" type="password" name="password" value=""/>
                <br/>
                {/*<a href="/registration"><button className="Log_In">Registration</button></a>*/}
                <button className="Log_In">log in</button>
            </form>
        </div>
    );
};

export default LogIn;