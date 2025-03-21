import React from 'react';
import { BrowserRouter, Routes, Route } from  "react-router";
import HomePage from "./pages/HomePage";
import Positions from "./pages/Positions";
import TariffPage from "./pages/TariffPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Lup4 from "./components/Lup4/lup4";
import DropDown from "./components/Dropdown/DropDown";
import VitaminA from "./pages/VitaminA";


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/position" element={<Positions/>} />
                    <Route path="/tariff" element={<TariffPage/>} />
                    <Route path="/vitamin" element={<VitaminA/>} />
                    <Route path="/lup" element={<Lup4/>} />
                    <Route path="/dropdown" element={<DropDown/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Routing;