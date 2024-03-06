/*useReducer may be used as an alternative to useState.
 It’s ideal for complex state logic where there’s a
  dependency on previous state values or a lot of state sub-values. */

import React, { useReducer } from "react";
import "./styles.css";

const initialState = { height: 10 };
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return { height: state.height + 20 };
        case "remove":
            return { height: state.height - 20 };
        default:
            throw new Error("What's going on");
    }
};

const Square = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div
                style={{ height: state.height, backgroundColor: "red", width: 100 }}
            ></div>
            <div>
                <button onClick={() => dispatch("add")}>+</button>
                <button onClick={() => dispatch("remove")}>-</button>
            </div>
        </>
    );
};
export default function App() {
    return (
        <div className="App">
            <Square />
        </div>
    );
}
