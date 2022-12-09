import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";
import './button.css';

function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onClick = () => {
        if (darkMode)
            theme.dispatch({ type: "LIGHTMODE" });
        else
            theme.dispatch({ type: "DARKMODE" });
            
    };

    return (
        <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    )
}

export default SwitchButton;