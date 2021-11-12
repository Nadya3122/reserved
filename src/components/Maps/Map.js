import React from 'react';
import map from './map of restaurant.png';
import './Map.css';

const Map = () => {
    return (
        <div className="map">
            <img src={map} alt="map"/>
        </div>
    );
};

export default Map;