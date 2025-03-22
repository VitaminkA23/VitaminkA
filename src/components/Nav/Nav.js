import React from 'react';
import './nav.scss'
import home from "../../assets/images/home.png";

const Nav = () => {
    return (
        <div className="nav">
           <div id="border">
               <img className="home" name="home" src={home} alt={"Home"} />
           </div>
           <div className="border">
               <a className="touch" href={home}>
                   ABOUT US
               </a>
           </div>
           <div className="border">
               <a className="touch" href={home}>
                   GALLERY
               </a>
           </div>
           <div className="border">
               <a className="touch" href={home}>
                   EVENTS
               </a>
           </div>
           <div className="border">
               <a className="touch" href={home}>
                   BLOG
               </a>
           </div>
            <div>
                <a className="touch" href={home}>
                    CONTACTS
                </a>
            </div>
        </div>
    );
};

export default Nav;