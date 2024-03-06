import React, { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <Component />
        </div>
    );
}

const Component = () => {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.style.color = "red";
            inputRef.current.style.backgroundColor = "yellow";
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Style Element</button>
            <input ref={inputRef} This is the element to style />
        </div>
    );
};