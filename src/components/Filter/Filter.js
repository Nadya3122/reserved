import React from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <div>
            <form className="filter" action="">
                <input placeholder="name" type="text" name="name" value=""/>
                <input placeholder="area" type="text" name="area" value=""/>
                <input placeholder="number of persons" type="tel" name="number" value=""/>
                <input placeholder="date" type="date" name="date" value=""/>
                <button type="button" name="find">find</button>
            </form>
        </div>
    );
};

export default Filter;