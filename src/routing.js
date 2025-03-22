import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResponsivePage from "./pages/ResponsivePage";
import VitaminLess1 from "./pages/VitaminLess1";


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<ResponsivePage />} />
                    <Route path="/vitamin" element={<VitaminLess1/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Routing;