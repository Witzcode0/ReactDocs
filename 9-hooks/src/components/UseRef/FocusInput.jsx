import React, { useRef, useState, useEffect } from 'react';

function FocusInput() {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    // Function to update state when input value changes
    const handleInputChange = () => {
        if (inputRef.current) {
            const value = inputRef.current.value;
            setInputValue(inputRef.current.value);
            if(value.length < 8) {
                setError("Password must be at least 8 characters long");
            } else {
                setError(""); // Clear error if valid
            }
        }
    };

    useEffect(() => {
        inputRef.current.focus(); // Auto focus the input field when the component mounts
        inputRef.current.style.padding = "2px";
        inputRef.current.style.borderRadius = "5px";
        inputRef.current.style.color = "blue";
        inputRef.current.focus(); // Auto focus the input field when the component mounts
    }, []);

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                placeholder="Auto Focus Input"
                onChange={handleInputChange} // Auto call function on change
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    );
}

export default FocusInput;
