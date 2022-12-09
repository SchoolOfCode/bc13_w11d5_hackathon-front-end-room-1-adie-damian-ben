import React from "react";
import './inputsection.css';

function InputSection() {
    return (
        <div className="input-section-container">
            <div className="input-section-header">
                <h2>Enter your question here!</h2>
            </div>
            <div className="input-section-input">
                <input placeholder="Ask the Magic 8-Ball anything.."></input>
            </div>
            <div className="input-section-submit">
                <button>Submit!</button>
            </div>
        </div>
    )
}

export default InputSection;