const form = document.querySelector('form');

const email = form.querySelector('#email');
const name = form.querySelector('#name');
const surname = form.querySelector('#surname');
const pass1 = form.querySelector('#pass1');
const pass2 = form.querySelector('#pass2');
const agree = form.querySelector('#agree');

const errorMessage = document.querySelector('#error-message');
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  errorMessage.classList.add('d-none');
  successMessage.classList.add('d-none');

  const errors = [];

  if (!email.value.includes('@')) {
    errors.push('Email musi posiadać znak @');
  }

  if (email.value.length === 0) {
    errors.push('Email nie może być pusty');
  }

  if (name.value.length < 2) {
    errors.push('Imię musi posiadać minimum 2 znaki');
  }

  if (surname.value.length < 2) {
    errors.push('Nazwisko musi posiadać minimum 2 znaki');
  }

  if (pass1.value.length === 0 || pass2.value.length === 0) {
    errors.push('Hasło nie może być puste');
  }

  if (pass1.value !== pass2.value) {
    errors.push('Hasła muszą być takie same');
  }

  if (!agree.checked) {
    errors.push('Musisz zaakceptować warunki');
  }

  console.log('errors', errors);

  if (errors.length > 0) {
    errorMessage.classList.remove('d-none');
    errorMessage.innerText = errors.join(', ');
  } else {
    successMessage.classList.remove('d-none');
    successMessage.innerText = 'Formularz został wysłany';
  }
});