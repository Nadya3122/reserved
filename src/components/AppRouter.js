import {AuthContext} from "./context";
import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Catalog from "../Pages/Catalog";
import Booking from "../Pages/Booking";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import Account from "../Pages/Account/Account";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
            ?
            <Routes>
                <Route path="*" element={<MainPage/>}/>
                <Route exact path="/catalog" element={<Catalog/>}/>
                <Route exact path="/booking" element={<Booking/>}/>
                <Route exact path="/account" element={<Account/>}/>
            </Routes>
            :
            <Routes>
                <Route path="*" element={<MainPage/>}/>
                <Route exact path="/login" element={<LogIn/>}/>
                <Route exact path="/registration" element={<Registration/>}/>
            </Routes>

    );
};

export default AppRouter;
