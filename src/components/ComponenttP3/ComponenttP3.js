import React from 'react';
import './ComponenttP3.scss';
import aesthetic from '../../assets/images/aesthetic.jpg';
import aesthetic6 from '../../assets/images/aesthetic6.jpg';

const ComponenttP3 = () => {
    return (
        <div className={'componentP3'}>
            <nav className={'navak4'}>
                <div className={'n'}>
                    <a>
                        Latest
                    </a>
                </div>
                <div className={'n'}>
                    <a>
                        Popular
                    </a>
                </div>
                <div className={'nn'}>
                    <a>
                        Featured
                    </a>
                </div>
            </nav>
            <div className={'comp'}>
                <div className={'katu'}>
                    <div className={'katvik'}>
                        <div>
                            <img src={'aesthetic'} alt={'photo'}/>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className={'katvik'}>
                        <div>
                            <img src={'aesthetic6'} alt={'photo'}/>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'tak'}>
                    <p className={'karmir'}>
                        Lorem Ipsum dolor sit amet
                    </p>
                    <p className={'spitak'}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <p className={'spitak'}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <p className={'spitak'}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComponenttP3;