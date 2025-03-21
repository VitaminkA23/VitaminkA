import React from 'react';
import { BrowserRouter, Routes } from  "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/*<Route path="/" element={<HomePage/>} />*/}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Routing;