import React, { useRef, useEffect } from "react";

const FocusInput = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <center>
                <input ref={inputRef} type="text" placeholder="Type something..." />
                <button onClick={handleClick}>Click me!</button>
            </center>
        </div>
    );
};

export default FocusInput;