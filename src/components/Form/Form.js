import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className="book">
            <form action="">
                <input placeholder="Time from" type="time" name="Time_from" value=""/>
                <br/>
                <input placeholder="Time to" type="time" name="Time_to" value=""/>
                <br/>
                <button className="book_btn" type="submit" name="login">Sent</button>
            </form>
        </div>
    );
};

export default Form;