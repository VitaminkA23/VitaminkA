import React from 'react';
import './nav.scss'
import home from "../../assets/images/home.png";

const Nav = () => {
    return (
        <div className="nav">
           <div id="border">
               <img className="home" name="home" src={home} alt={"Home"} />
           </div>
               <a className="touch" href={'/'}>
                   ABOUT US
               </a>
               <a className="touch" href={'/'}>
                   GALLERY
               </a>
               <a className="touch" href={'/'}>
                   EVENTS
               </a>
               <a className="touch" href={'/'}>
                   BLOG
               </a>
                <a className="touch" href={'/'}>
                    CONTACTS
                </a>
        </div>
    );
};

export default Nav;