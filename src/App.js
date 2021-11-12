import React from "react";
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import LogIn from "./components/LogIn/LogIn";
import {BrowserRouter as Router, useRoutes,} from 'react-router-dom';
import Registration from "./components/Registration/Registration";
import Catalog from "./components/Catalog/Catalog";
import Booking from "./components/Booking/Booking";

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