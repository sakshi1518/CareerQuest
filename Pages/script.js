const wrapper = document.querySelector('.wrapper');
const profileIcon = document.getElementById('profileIcon');
const closeLogin = document.getElementById('closeLogin');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const welcomeMessage = document.getElementById('welcomeMessage');

let isLoggedIn = false; // Keep track of user authentication status

// Function to show the welcome message
function showWelcome(username) {
  welcomeMessage.textContent = `Welcome, ${username}!`;
}

// Function to hide the welcome message
function hideWelcome() {
  welcomeMessage.textContent = '';
}

// Function to handle successful login
function handleLogin(username, email) {
  isLoggedIn = true;
  showWelcome(username);
  wrapper.classList.remove('active-popup');
  const logoutButton = document.createElement('span');
  logoutButton.classList.add('logout-btn');
  logoutButton.textContent = 'Logout';
  logoutButton.id = 'logoutBtn';
  const existingUsername = profileIcon.querySelector('.username');
  // if (existingUsername) {
  //   existingUsername.textContent = username; // Update existing username
  // } else {
  //   const usernameSpan = document.createElement('span');
  //   usernameSpan.classList.add('username');
  //   usernameSpan.textContent = username;
  // }
}



// Function to handle logout
function handleLogout() {
  if (isLoggedIn) {
    isLoggedIn = false;
    hideWelcome();
    const logoutPopup = document.createElement('div');
    logoutPopup.classList.add('logout-popup');
    logoutPopup.innerHTML = '<p>You are now logged out.</p>';
    document.body.appendChild(logoutPopup);
    setTimeout(() => {
      logoutPopup.remove(); // Remove the logout confirmation pop-up after a few seconds
    }, 2000); // Adjust the timeout duration as needed
  }
}

profileIcon.addEventListener('click', () => {
  if (!isLoggedIn) {
    wrapper.classList.add('active-popup');
    hideWelcome();
  } else {
    handleLogout();
  }
});


closeLogin.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  hideWelcome();
});

showRegister.addEventListener('click', () => {
  wrapper.classList.add('active');
  hideWelcome();
});

showLogin.addEventListener('click', () => {
  wrapper.classList.remove('active');
  hideWelcome();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // You can add your login logic here, e.g., validate the login credentials
  // and show the user name after successful login.
  const username = loginForm.querySelector('input[type="text"]').value;
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;
  console.log('Login submitted:', { username, email, password });
  // Replace the above console.log with your login logic.

  // For this example, we'll assume the login is successful and show the welcome message.
  handleLogin(username, email);
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // You can add your registration logic here, e.g., validate the input fields,
  // save the user data to a database, etc.
  const username = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;
  const agreeTerms = registerForm.querySelector('input[type="checkbox"]').checked;

  if (!agreeTerms) {
    alert('Please agree to the terms and conditions.');
    return;
  }

  console.log('Registration submitted:', { username, email, password });
  // Replace the above console.log with your registration logic.
  // You can also show a success message or redirect the user to the login page.
  // For this example, we'll assume the registration is successful and show the welcome message.
  handleLogin(username, email);
  wrapper.classList.remove('active'); // Close the registration popup after successful registration
});
