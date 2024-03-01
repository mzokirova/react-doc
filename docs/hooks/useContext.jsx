import React, { useContext } from "react";
import "./styles.css";
import ThemeContext from "../useContext";
const ThemeContext = React.createContext("black");

export default function App() {
    return (
        <div className="App">
            <Button />
        </div>
    );
}

function Button() {
    const theme = useContext(ThemeContext);
    return (

        <button style={{ backgroundColor: `${theme}`, color: "white" }}>
            I am a {theme} button
        </button>
    );
}
