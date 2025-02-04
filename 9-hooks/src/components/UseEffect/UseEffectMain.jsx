import React, { useEffect, useState } from 'react'

function FetchDataComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setData(data));
    });
    return (
        <div>
            <h3>FetchDataComponent</h3>
            <h2>Posts</h2>
            <ul>
                {data.slice(0, 5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
  )
}

export default FetchDataComponent