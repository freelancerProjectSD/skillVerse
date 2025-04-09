const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
//const PORT = 5050;


app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});
console.log("About to start server...");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
