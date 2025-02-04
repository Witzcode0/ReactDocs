import React, { useEffect, useState } from 'react'

function DocumentTitleUpdater() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

  return (
    <div>
        <h3>DocumentTitleUpdater</h3>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default DocumentTitleUpdater