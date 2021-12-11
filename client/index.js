/* 
HTML
<form action="/name" method="get">
  <input type="text" name="name" style="display: block;">
  <input type="submit" value="Submit">
</form> 
*/

const createNameSubmissionForm = () => {
  let form = document.createElement('form');
  let textbox = document.createElement('input');
  let submit = document.createElement('input');

  // 2. This form action is tied to a route in your Express server.
  //    When you press the submit button, the form delivers the
  //    data to the route `/name`. Without Express, the data would
  //    go nowhere. See what happens to the data in server/index.js.
  form.action = '/name';
  form.method = 'get';

  // Inputs with a `name` attribute are the pieces of form data
  // that can be sent to your server. The name becomes the key in
  // the key-value paired object being sent to the server.
  // e.g. { name: 'Jan' }
  textbox.type = 'text';
  textbox.name = 'name';
  textbox.style.display = 'block';

  submit.value = 'Submit';
  submit.type = 'submit';

  form.appendChild(textbox);
  form.appendChild(submit);

  return form;
}

// 1. Code flow starts here, with creating a form element
//    and appending it to the container element in index.html.
//    I use a IIFE here because I know the code inside is a one-off,
//    and won't be used again.
//    https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(() => {
  let container = document.getElementById('container');
  let div = document.createElement('div');
  div.appendChild(createNameSubmissionForm())
  container.appendChild(div);
})(document)