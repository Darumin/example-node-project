const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client/dist')));

app.listen(port, () => {
  console.log(`Now listening at ${port}...`);
});

app.get('/name', (req, res) => {
  const { name } = req.query;
  res.send(`Your name is ${name}`);
});