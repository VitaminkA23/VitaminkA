import React from 'react';
// import "./lesson4.css"

const Lesson4 = () => {
    return (
        <div className="back">
        <div className="back2">
            <div className="divan">
                First Name
                <div>
                <input type={"text"}/>
                </div>
            </div>
            <div className="divan">
                Last Name
                <div>
                <input type={"text"}/>
                </div>
            </div>
            <div className={"divan"}>
                Password
                <div>
                <input type={"password"}/>
                </div>
            </div>
            <div className={"divan"}>
                Yes or No?
                <div>
                Yes <input type={"radio"} name={"no"} value={"yes"} id={"Yes"}/>
                No <input type={"radio"} name={"no"} value={"no"} id={"No"}/>
                </div>
            </div>
            <div className={"divan"}>
                No or Yes?
                <div>
                Yes <input type={"checkbox"} name={"no"} />
                No <input type={"checkbox"} name={"yes"} />
                Maybe <input type={"checkbox"} name={"maybe"} />
                </div>
            </div>
            <div className={"divan"}>
                Select Item
                <div>
                <select name={"Lorem"}>
                    <option>Lorem</option>
                    <option>Ipsum</option>
                </select>
                </div>
            </div>
        </div>
        </div>




    );
};

export default Lesson4;