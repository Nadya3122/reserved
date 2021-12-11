import React from 'react';
import './Booking.css'
import Header4 from "../../components/Headers/Header4";
import Form from "../../components/Form/Form";
import Map from "../../components/Maps/Map";

const Booking = () => {
    return (
        <div>
            <Header4/>
            <Map/>
            <Form/>
        </div>
    );
};

export default Booking;