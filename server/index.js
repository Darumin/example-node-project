const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client')));

app.listen(port, () => {
  console.log(`Now listening at ${port}...`);
});

app.get('/', (req, res) => {
  res.send('Hello from the server.');
});