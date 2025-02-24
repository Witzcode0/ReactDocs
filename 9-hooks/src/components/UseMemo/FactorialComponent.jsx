import React, { useState, useMemo } from "react";

function FactorialComponent() {
  const [number, setNumber] = useState(5);
  const [theme, setTheme] = useState("light");

  // Memoized factorial calculation (recalculates only when `number` changes)
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const computeFactorial = (num) => {
      if (num <= 1) return 1;
      return num * computeFactorial(num - 1);
    };
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <h2>Factorial of {number}: {factorial}</h2>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
      />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default FactorialComponent;
