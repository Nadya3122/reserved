import React from 'react';
import styles from './Button.module.css';


const MyButton = ({children, ...props}) =>{
    return (
        <button {...props} className={styles.Btn}>
            {children}
        </button>
    );
}

export default MyButton;

