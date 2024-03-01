import { useCallback, useState } from "react";
import React from "react";
import "./styles.css";
export default function App() {
    const [count, setCounter] = useState(1);
    const handleClick = () => setCounter(count + 1);
    const someValue = "someValue";
    const doThis = useCallback(() => {
        return someValue;
    }, [someValue]);

    return (
        <div className="App">
            <Count count={count} handleClick={handleClick} />
            <Greeting doThis={doThis} />
        </div>
    );
}
function Count({ count, handleClick }) {
    console.log("rendering count");
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
const Greeting = React.memo((props) => {
    console.log("greeting useCallback hook");
    return (
        <div style={{ backgroundColor: "black", color: "red", height: "80px" }}>
            <h1>Hello, welcome to react</h1>
        </div>
    );
});
