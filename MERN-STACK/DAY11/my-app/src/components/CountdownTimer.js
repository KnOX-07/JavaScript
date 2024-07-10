import React, { useState, useRef } from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState(60); // Initial countdown time
    const [isRunning, setIsRunning] = useState(false);
    const timerIdRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerIdRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timerIdRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
    };

    const pauseTimer = () => {
        if (isRunning) {
            clearInterval(timerIdRef.current);
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        clearInterval(timerIdRef.current);
        setTime(60);
        setIsRunning(false);
    };

    return (
        <div>
            <center>
                <h2>Countdown Timer</h2>
                <p>{time} seconds</p>
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </center>
        </div>
    );
};

export default CountdownTimer;