const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const serverUrl = 'https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/';
const validateForm = (event) => {
  const requiredFields = loginForm.reportValidity(event.target.value);
  if (requiredFields) {
    submitBtn.removeAttribute('disabled');
  }
};
loginForm.addEventListener('input', validateForm);

const sendDataBtn = document.querySelector('.submit-button');

// algo
// 1. read form - get user info
// 2sent data to server
// handle server response

const createUserHandler = (event) => {
  event.preventDefault();
  // 1
  // opt1 bad
  //   const user = {
  //   email: emailInput.value,
  //   name: nameInput.value,
  //   password: nameInput.value,
  // };
  //opt2 GOOD
  const usersData = Object.fromEntries(new FormData(loginForm));

  fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(usersData),
  })
    .then((response) => response.json())
    .then((body) => {
      loginForm.reset();
      alert(JSON.stringify(body));
    })
    .catch(() => (errorText.textContent = 'Failed to create user'));
};
loginForm.addEventListener('submit', createUserHandler);
