import React from "react";
import './App.css';
import MainPage from "./Pages/MainPage/MainPage";
import LogIn from "./Pages/LogIn/LogIn";
import {BrowserRouter as Router, useRoutes,} from 'react-router-dom';
import Registration from "./Pages/Registration/Registration";
import Catalog from "./Pages/Catalog/Catalog";
import Booking from "./Pages/Booking/Booking";

const App = () => {
    return useRoutes([
        {path: "/", element: <MainPage/>},
        {path: "login", element: <LogIn/>},
        {path: "registration", element: <Registration/>},
        {path: "catalog", element: <Catalog/>},
        {path: "booking", element: <Booking/>}
        // ...
    ]);
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;