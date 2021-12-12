import React from "react";
import style from './MainPage.module.css';
import MyButton from "../../components/UI/Button/MyButton";
import Header from "../../components/Headers/Header";
import {Link} from "react-router-dom";

const MainPage = () => {
    return(
        <div>
            <Header/>
            <h1 className={style.title}>reserve</h1>
            <p className={style.description}>Convenient platform for booking tables in restaurants. Choose a place, time and desired table. </p>
            <Link to="/catalog"><MyButton style={{marginLeft: '15rem'}}>Catalog</MyButton></Link>

        </div>
    )
}
export default MainPage;