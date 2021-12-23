import React, {useEffect, useState} from 'react';
import map from './map of restaurant.png';
import './Map.css';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import Service from "../../API/Service";

const Map = () => {
    const params =useParams();
    const [post, setPost] = useState({});

    const [fetchPostById, error] = useFetching(async (id)=>{
        const response = await Service.getById(id);
        setPost(response);
    })
    useEffect(()=>{
        fetchPostById(params.id);
    },[])
    return (
        <div className="map">
            {/*<img src={map} alt="map"/>*/}
            <img src={process.env.PUBLIC_URL + "/img/"+post.map_picture + ".png"} alt={map}/>
        </div>
    );
};

export default Map;