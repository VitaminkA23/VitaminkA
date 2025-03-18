import React from 'react';
import './homePageContent.scss'
import HomeCard from "../HomeCard/HomeCard";
import Black3 from "../../assets/images/Black3.jpg";
import Black from "../../assets/images/Black.jpg";
import Black4 from "../../assets/images/Black4.jpg";

const HomePageContent = () => {

    let Anna = {
        name: 'Anna',
        image: Black3,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Deen = {
        name: 'Deen',
        image: Black,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Dav  = {
        name: 'Dav',
        image: Black4,
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit.'
    }


    let products = [Anna, Deen, Dav];


    return (
        <section className="HomePageContent">
            <h1>Home Page Content </h1>
            <p>
                Lorem Ispum is simply dummy text of the printing and typesetting industry.
                Lorem Ispum has been the indystry's standard dummy text ever since the
            </p>
            <div className='itemsWrapper'>
                {products.map((vale)=> {
                    return (
                        <HomeCard name={vale.name} image={vale.image} description={vale.description}/>
                    )
                })}
            </div>
        </section>
    );
};

export default HomePageContent;