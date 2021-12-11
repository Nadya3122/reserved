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


// return (
//     <div>
//         {/*<MyButton className="catalog" href="/catalog" >View catalog</MyButton>*/}
//         <a href="/catalog"><button className="catalog">View catalog</button></a>
//     </div>
// );