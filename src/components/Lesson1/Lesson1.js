import React from "react";
import './lesson1.scss';
import Component1 from "../Component1/Component/Component1";
import Component2 from "../Component2/Component2";
import Component3 from "../Component3/Component3";

const Lesson1 = () => {
    return (
        <div className="lesson1">
            <Component1 />
            <Component2 />
            <Component3 />
        </div>
    );
}

export default Lesson1;