const express = require('express');
const app = express();
const PORT = 5050;

app.use(express.json());

// Route for / (root)
app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

// Route for /api/hello
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

console.log("About to start server...");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
