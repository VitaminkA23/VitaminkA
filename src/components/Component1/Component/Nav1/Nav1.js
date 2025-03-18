import React from 'react';
import './nav1.scss';

const Nav1 = () => {
    return (
        <div className="nav1">
            <nav className="nav1">
                <div>
                   <a href="/" className="a">
                       Home
                   </a>
                </div>
                <div>
                    <a href="/" className="a">
                        Blog
                    </a>
                </div>
                <div>
                    <a href="/" className="a">
                        Features
                    </a>
                </div>
                <div>
                    <a href="/" className="a">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Nav1;