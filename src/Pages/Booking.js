import React from 'react';
import Form from "../components/Form/Form";
import Map from "../components/Maps/Map";
import Header from "../components/Headers/Header";
import {useNavigate} from "react-router-dom";

const Booking = (props) => {


    return (
        <div>
            <Header/>
            <Map/>
            <Form/>
        </div>
    );
};

export default Booking;