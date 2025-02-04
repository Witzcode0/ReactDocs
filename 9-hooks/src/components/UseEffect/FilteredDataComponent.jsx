import React, { useState, useEffect } from "react";

function FilteredDataComponent() {
  const [category, setCategory] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${category}`)
      .then(response => response.json())
      .then(data => setData(data));

  }, [category]); // Runs whenever 'category' changes

  return (
    <div>
      <button onClick={() => setCategory("posts")}>Posts</button>
      <button onClick={() => setCategory("users")}>Users</button>
      <button onClick={() => setCategory("comments")}>Comments</button>

      <h2>Data: {category}</h2>
      <ul>
        {data.slice(0, 5).map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredDataComponent;
