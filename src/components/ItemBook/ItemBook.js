import React, {useEffect, useState} from 'react';
import style from './ItemBook.module.css'
import MyButton from "../UI/Button/MyButton";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import Service from "../../API/Service";

const ItemBook = () => {
    const params =useParams();
    const [res, setRes] = useState({});

    const [fetchResById, error] = useFetching(async ()=>{
        const response = await Service.getResByCuts(1);
        setRes(response);
    })
    useEffect(()=>{
        fetchResById(1);
    },[])
    return (
        <div className={style.ItemBook}>
            {/*{console.log(res.place_id)}*/}
            <p>Date: {res.begin_time}</p>
            <p>Table: {res.place_id}</p>
            <MyButton style={{display:'flex', position:'right', fontSize:'14px'}}>Cancle</MyButton>
        </div>
    );
};

export default ItemBook;