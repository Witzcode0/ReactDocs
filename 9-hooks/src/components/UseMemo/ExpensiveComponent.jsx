import React, { useState, useMemo  } from 'react'

function ExpensiveComponent() {
    const [count, setCount] = useState(0);
    const [numbers] = useState([5, 1, 4, 2, 3]);

    // Memoized sorted array (only recalculates when `numbers` change)
    const sortedNumbers = useMemo(() => {
        console.log("Sorting numbers...");
        return numbers.sort((a, b) => a - b);
    }, [numbers]);

    return (
        <div>
            <h2>Sorted Numbers: {sortedNumbers.join(", ")}</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    )
}

export default ExpensiveComponent