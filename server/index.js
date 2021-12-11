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

app.get('/name', (req, res) => {
  // 3. When you type in a name in the text box and hit
  //    the Submit button on your app, the HTML form will
  //    send a very basic GET request to this route. 
  //    Note: there's no error catching here. In practice, 
  //    you should always try to catch asynchronous calls.
  // 4. The server receives the form data in the form of a
  //    object called query. The response is a plain text
  //    message back to the client. Since the message itself
  //    has no HTML or CSS applied, it will just show up as
  //    plain text.
  const { name } = req.query;
  res.send(`Your name is ${name}`);
});