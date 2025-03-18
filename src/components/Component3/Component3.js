import React from 'react';
import './component3.scss';
import White2 from'../../assets/images/White2.jpg'
import White3 from'../../assets/images/White3.jpg'
const Component3 = () => {
    return (
        <div className="component3">
            <div className="box">
                <div className="content">
                    <div className="row">
                        <div className="row">
                            <img className="img" src={White2} alt="White2" />
                        </div>
                        <div className="column">
                            Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <img className="img" src={White3} alt="White2" />
                        </div>
                        <div className="column">
                            Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
                <div className="lorem">
                    <div className="radius">
                        Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="radius">
                        Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="radius">
                        Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="radius">
                        Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component3;