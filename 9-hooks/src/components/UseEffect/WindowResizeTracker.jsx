import React, { useState, useEffect } from 'react'

function WindowResizeTracker() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Runs once, and cleanup runs when unmounted

    return <div>
        <h3>WindowResizeTracker</h3>
        <h2>Window Width: {width}px</h2>
    </div>;
}

export default WindowResizeTracker