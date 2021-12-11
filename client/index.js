const createForm = () => {
  let form = document.createElement('form');
  let textbox = document.createElement('input');
  let submit = document.createElement('input');

  form.action = '/name';

  textbox.type = 'text';
  textbox.name = 'name';
  textbox.style.display = 'block';

  submit.value = 'Submit';
  submit.type = 'submit';

  form.appendChild(textbox);
  form.appendChild(submit);

  return form;
}

let main = document.querySelector('main');
main.appendChild(createForm());