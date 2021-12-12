import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {AuthContext} from "./components/context";
import AppRouter from "./components/AppRouter";

// const App = () => {
//     return useRoutes([
//         {path: "/", element: <MainPage/>},
//         {path: "login", element: <LogIn/>},
//         {path: "registration", element: <Registration/>},
//         {path: "catalog", element: <Catalog/>},
//         {path: "booking", element: <Booking/>}
//     ]);
// };

function App() {
    const [isAuth, setIsAuth] = useState(false);


    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true);
            console.log(isAuth);
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