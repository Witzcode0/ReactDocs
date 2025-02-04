import React, { useEffect } from "react";

function MouseTracker() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log(`Mouse Position: X=${event.clientX}, Y=${event.clientY}`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      console.log("Cleanup: Event Listener Removed");
    };
  }, []);

  return <h2>Move the mouse and check the console.</h2>;
}

export default MouseTracker;
