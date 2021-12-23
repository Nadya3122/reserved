import React from 'react';
import './Filter.css';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

const Filter = ({filter, setFilter}) => {
    return (
        <div>
            <form className="filter" action="">
                <MyInput
                    value={filter.query}
                    onChange={e=>setFilter({...filter, query:e.target.value})}
                    placeholder="name"
                    type="text"
                    />
                <MyButton style={{fontSize: '14px', padding: '2px 15px'}} type="button" name="find">Find</MyButton>
            </form>
        </div>
    );
};

export default Filter;