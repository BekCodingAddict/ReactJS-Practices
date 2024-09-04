import React from "react";

const Hello=()=>{
    // return (
    //     <div className="dummyClass">
    //     <h1>Hello JavaScript!</h1>
    //     </div>
    // )

    return React.createElement(
        'div',{id:'hello',className:'dummyClass'},
    React.createElement('h1',null, 'Hello JavaScript ReactJS!') )
}

export default Hello;