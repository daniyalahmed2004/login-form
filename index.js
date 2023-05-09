let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

let loginEmailInput = document.getElementById('loginEmail');
let loginPasswordInput = document.getElementById('loginPassword');

function showLoginForm() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

function showSignupForm() {
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
}

function signup() {
  let name = nameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;

  // Perform signup validation and save the data to variables or database

  // Clear input fields
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';

  alert('Sign Up Successful!');

  // Navigate to login screen
  showLoginForm();
}

function login() {
  let loginEmail = loginEmailInput.value;
  let loginPassword = loginPasswordInput.value;

  // Perform login validation using saved data or database
  let savedEmail = emailInput.value;
  let savedPassword = passwordInput.value;

  if (loginEmail === savedEmail && loginPassword === savedPassword) {
    alert('Login Successful!');
  } else {
    alert('Invalid Email or Password');
  }

  // Clear input fields
  loginEmailInput.value = '';
  loginPasswordInput.value = '';
}