const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = loginForm.elements.email.value;
  const passwordValue = loginForm.elements.password.value;
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
  }
  const formData = {
    [loginForm.elements.email.name]: loginForm.elements.email.value,
    [loginForm.elements.password.name]: loginForm.elements.password.value,
  };
  console.log(formData);
  loginForm.reset();
});
