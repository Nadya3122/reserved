import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {AuthContext} from "./components/context";
import AppRouter from "./components/AppRouter";


function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
}

export default App;