
// Section 2: React [Mandatory]
// 1. Coding Challenge: Simple Counter Component

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter;

// 2. Conceptual Question: Purpose of useEffect
// useEffect is used to handle side effects in React components (e.g., data fetching, subscriptions). It runs after the render and can optionally clean up when the component unmounts or when dependencies change.

// Example use case:

useEffect(() => {
    // This runs on component mount
    console.log('Component mounted');
    return () => {
        // Cleanup function runs on component unmount
        console.log('Component unmounted');
    };
}, []);
