import React from 'react';
import './fruits.scss'
import Watermelon from "../../assets/images/Watermelon.jpg";
import cherry from "../../assets/images/cherry.jpg";
import malina from "../../assets/images/malina.jpg";
import apple from "../../assets/images/apple.jpg";
import Strawberry from "../../assets/images/Strawberries.jpg";

const Fruits = () => {
    return (
        <div className="fruits">
            <div className="borderf">
                <img className="fruit"  src={malina} alt="malina" />
            </div>
            <div className="borderf">
                <img className="fruit"  src={apple} alt="apple" />
            </div>
            <div className="borderf">
                <img className="fruit"  src={Watermelon} alt="fresa" />
            </div>
            <div className="borderf">
                <img className="fruit"  src={cherry} alt="malina" />
            </div>
            <div className="borderf">
                <img className="fruit"  src={Strawberry} alt="strawberry" />
            </div>
        </div>
    );
};

export default Fruits;