import React from 'react';
import './Filter.css';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

const Filter = () => {
    return (
        <div>
            <form className="filter" action="">
                <MyInput placeholder="name" type="text" name="name"/>
                <MyInput placeholder="area" type="text" name="area" />
                <MyInput placeholder="number of persons" type="tel" name="number"/>
                <MyInput placeholder="date" type="date" name="date"/>
                <MyButton style={{fontSize: '14px', padding: '2px 15px'}} type="button" name="find">Find</MyButton>
            </form>
        </div>
    );
};

export default Filter;