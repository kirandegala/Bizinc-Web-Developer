// Section 3: Node.js [Mandatory]
// 1. Coding Challenge: Basic API Endpoint

const express = require('express');
const app = express();

app.get('/message', (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// 2. Conceptual Question: Asynchronous Operations in Node.js
// Node.js uses an event-driven, non-blocking I/O model, which allows it to handle many operations concurrently without blocking the main thread. This improves efficiency, especially in handling I/O-bound tasks like network or file system operations.

