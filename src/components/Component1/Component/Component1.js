import React from 'react';
import './component1.scss';
import Grey2 from "../../../assets/images/Grey2.jpg";
import Nav1 from "./Nav1/Nav1";
import Nav2 from "./Nav2/Nav2";


const Component1 = () => {
    return (
        <div className="component1"> <img className="img" src={Grey2} alt="Grey" />
              <div className="position">
                <Nav1/>
                <Nav2/>
              </div>
        </div>
    );
};

export default Component1;