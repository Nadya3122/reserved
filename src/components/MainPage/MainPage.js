import React from "react";
import './MainPage.css';
import ButtonCatalog from "../ButtonCatalog/ButtonCatalog";
import Header1 from "../Headers/Header1";

const MainPage = () => {
    return(
        <div>
            <Header1/>
            <h1>reserve</h1>
            <p>Convenient platform for booking tables in restaurants. Choose a place, time and desired table. </p>
            <ButtonCatalog/>
        </div>
    )
}
export default MainPage;