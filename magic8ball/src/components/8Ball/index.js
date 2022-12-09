import React from "react";
import './8ball.css';

function EightBall({ answer }) {

    let ranInt = Math.floor(Math.random() * 3);

    return (
        <div className="eight-ball-container">
            <div className="eight-ball-body">
                <div className="eight-ball-answer-container">
                    <div className="eight-ball-answer">
                    </div>
                </div>
                {/* {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>} */}
                <p>{answer?.payload?.length && answer.payload[ranInt].answer}</p>
            </div>
        </div>
    )
}

export default EightBall;