import React from 'react';
import style from './AdminPage.module.css'
import MyButton from "../../components/UI/Button/MyButton";
import Header from "../../components/Headers/Header";
import ItemBookList from "../../components/ItemBookList/ItemBookList";

const AdminPage = () => {
    return (
        <div>
            <Header/>
            <div className={style.Category}>
                <MyButton style={{fontSize: '14px', margin: '6px auto', color: 'black'}}>All applications</MyButton>
                <br/>
                <MyButton style={{fontSize: '14px', margin: '6px auto', color: 'green'}}>Approved</MyButton>
                <br/>
                <MyButton style={{fontSize: '14px', margin: '6px auto', color: 'red'}}>Rejected</MyButton>
                <br/>
            </div>
            <div className={style.BookingList}>
                <h3 >Booking List</h3>
                <ItemBookList/>
                <ItemBookList/>
            </div>
        </div>
    );
};

export default AdminPage;