import React from 'react';

const Javascript = () => {
    function handleClick() {
        alert("hi react");
    }

    function changebg() {
        let body = document.body;
        body.style.background = "red";
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <button onClick={changebg}>KeyUp</button>
        </div>
    );
};

export default Javascript;