import React from 'react';
import './ComponenttP2.scss'
import aesthetic2 from "../../assets/images/aesthetic2.webp";
import aesthetic3 from "../../assets/images/aesthetic3.jpg";
import aesthetic4 from "../../assets/images/aesthetic4.jpg";
import aesthetic5 from "../../assets/images/aesthetic5.jpg";
import Cardss2 from "../Cardss2/Cardss2";

const ComponenttP2 = () => {

    let Deen = {
        name: 'Deen',
        image: aesthetic4,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Anna = {
        name: 'Anna',
        image: aesthetic2,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Dav = {
        name: 'Dav',
        image: aesthetic3,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Levon = {
        name: 'Levon',
        image: aesthetic5,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let products = [Deen, Anna, Dav, Levon];

    return (
        <section className="componentP2">
            <nav className={'navak3'}>
                <div>
                    <a>
                        In The Mix
                    </a>
                </div>
            </nav>
            <div className='itemsWrapper'>
                {products.map((vale)=> {
                    return (
                        <Cardss2 name={vale.name} image={vale.image} description={vale.description} />
                    )
                })}
            </div>
        </section>
    );
};

export default ComponenttP2;