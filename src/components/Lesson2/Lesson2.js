import React from 'react';
import './lesson2.scss';
import CardsTariff from "../CardsTariff/CardsTariff";
import Black3 from "../../assets/images/Black3.jpg";
import Black from "../../assets/images/Black.jpg";
import Black4 from "../../assets/images/Black4.jpg";



const Lesson2 = () => {
    let Anna = {
        image: Black3,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Deen = {
        image: Black,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'

    }

    let Dav  = {
        image: Black4,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Levon  = {
        image: Black,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let products = [Anna, Deen, Dav, Levon];


    return (
        <div>
            <div className="lesson2">
                {products.map((vale)=> {
                    return (
                        <CardsTariff/>
                    )
                })}
            </div>
        </div>
    );
};

export default Lesson2;
