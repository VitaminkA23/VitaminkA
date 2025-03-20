import React from 'react';
import { BrowserRouter, Routes, Route } from  "react-router";
import HomePage from "./pages/HomePage";
import Positions from "./pages/Positions";
import TariffPage from "./pages/TariffPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Lup from "./components/Lup/lup";


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/position" element={<Positions/>} />
                    <Route path="/tariff" element={<TariffPage/>} />
                    <Route path="/lup" element={<Lup/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Routing;