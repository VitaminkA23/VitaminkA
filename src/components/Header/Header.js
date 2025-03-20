import React  from 'react';
import './header.scss'
import {Link} from "react-router";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to={"/"}> HOME </Link> </li>
                    <li>
                        <Link to="/position">
                            POSITION
                            <div className={'dropdown'}>
                                <Link className={'dropLink'} to='/position'> Lesson 1</Link>
                                <Link className={'dropLink'} to='/tariff'> Lesson 2</Link>
                                <Link className={'dropLink'} to='/'> Lesson 3</Link>
                                <Link className={'dropLink'} to='#'> Lesson 3</Link>
                            </div>
                        </Link>
                    </li>
                    <li> <Link to={"/contact"}> CONTACT </Link> </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
