import React, {useRef, useState, useEffect} from 'react'

function PreviousStateManage() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count; // Store the current count value
    }, [count]); // Runs when count changes
  
    return (
        <div>
            <h2>Current Count: {count}</h2>
            <h3>Previous Count: {prevCountRef.current}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default PreviousStateManage