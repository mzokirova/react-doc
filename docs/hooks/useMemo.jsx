/*The useMemo function returns a memoized value. useMemo is different from useCallback in that it internalizes return values instead of entire functions. Rather than passing 
a handle to the same function, React skips the function and returns the previous result, until the parameters change.*/
import React, { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
    const [age, setAge] = useState(99);
    const handleClick = () => setAge(age + 1);
    const someValue = useMemo(() => ({ value: "someValue" }));
    const doSomething = () => {
        return someValue;
    };
    return (
        <div className="App">
            <Age age={age} handleClick={handleClick} />
            <Instructions doSomething={doSomething} />
        </div>
    );
}
const Age = ({ age, handleClick }) => {
    return (
        <div>
            <div style={{ border: "2px", background: "papayawhip", padding: "1rem" }}>
                Today I am {age} Years of Age
            </div>
            <pre> - click the button below 👇 </pre>
            <button onClick={handleClick}>Get older! </button>
        </div>
    );
};

const Instructions = React.memo((props) => {
    return (
        <div style={{ background: "black", color: "yellow", padding: "1rem" }}>
            <p>Follow the instructions above as closely as possible</p>
        </div>
    );
});
