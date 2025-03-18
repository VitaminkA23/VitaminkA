import React from 'react';
import './component2.scss';
import Black3 from "../../assets/images/Black3.jpg";
import Black from "../../assets/images/Black.jpg";
import Black4 from "../../assets/images/Black4.jpg";
import Cards from "../Cards/Cards";

const Component2 = () => {

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
            <section className="component2">
                <div className='itemsWrapper'>
                    {products.map((vale)=> {
                        return (
                            <Cards name={vale.name} image={vale.image} description={vale.description} />
                        )
                    })}
                </div>
            </section>
    );
};

export default Component2;