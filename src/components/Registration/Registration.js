import React from 'react';
import Header3 from "../Headers/Header3";
import './Registration.css'

const Registration = () => {
    return (
        <div>
            <Header3/>
            <div className="fill">
                <h2>Fill in the following fields</h2>
            </div>
            <form className="reg_form" action="">
                <input className="in" placeholder="name" type="text" name="name" value=""/>
                <br/>
                <input className="in" placeholder="surname" type="text" name="surname" value=""/>
                <br/>
                <input className="in" placeholder="phone" type="tel" name="phone" value=""/>
                <br/>
                <input className="in" placeholder="e-mail" type="text" name="e-mail" value=""/>
                <br/>
                <input className="in" placeholder="password" type="password" name="password" value=""/>
                <br/>
                <div>
                    <a href="/login"><button className="button_reg" type="submit" name="login">Log in</button></a>
                </div>
            </form>
        </div>
    );
};

export default Registration;
