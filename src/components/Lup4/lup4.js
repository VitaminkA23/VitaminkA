import React from 'react';
import Black3 from "../../assets/images/Black3.jpg";
import Black from "../../assets/images/Black.jpg";
import Black4 from "../../assets/images/Black4.jpg";
import Lup from "../Lup/lup";

const Lup4 = () => {

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
        <div className={'div'}>
            {products.map((vale)=> {
                return (
                    <Lup/>
                )
            })}
        </div>
    );
};

export default Lup4;