import React from 'react';
import classes from "./Input.module.css";

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.MyInput} {...props}/>
    );
});

export default MyInput;