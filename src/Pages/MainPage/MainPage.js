import React from "react";
import './MainPage.css';
import MyButton from "../../components/UI/Button/MyButton";
import Header1 from "../../components/Headers/Header1";

const MainPage = () => {
    return(
        <div>
            <Header1/>
            <h1>reserve</h1>
            <p>Convenient platform for booking tables in restaurants. Choose a place, time and desired table. </p>
            <a href="/catalog"><MyButton style={{marginLeft: '15rem'}}>Catalog</MyButton></a>

        </div>
    )
}
export default MainPage;