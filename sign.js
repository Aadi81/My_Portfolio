const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.getElementById('signUpForm');
const passwordMatch = document.getElementById('passwordMatch');
const passwordMismatch = document.getElementById('passwordMismatch');

// Panel switch
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Eye toggle
const togglePassword = document.querySelectorAll('.toggle-password');

togglePassword.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', function () {
    const input = document.querySelector(this.getAttribute('toggle'));
    this.classList.add('spin');
    setTimeout(() => this.classList.remove('spin'), 300);

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
      this.classList.remove('fa-eye');
      this.classList.add('fa-eye-slash');
    } else {
      input.setAttribute('type', 'password');
      this.classList.remove('fa-eye-slash');
      this.classList.add('fa-eye');
    }
  });
});

// Password match check
signUpForm.addEventListener('submit', function (event) {
  const password = document.getElementById('signUpPassword').value;
  const confirmPassword = document.getElementById('signUpConfirmPassword').value;

  if (password !== confirmPassword) {
    event.preventDefault();
    passwordMismatch.style.display = 'block';
    passwordMatch.style.display = 'none';
  } else {
    event.preventDefault();
    passwordMismatch.style.display = 'none';
    passwordMatch.style.display = 'block';
    // Handle actual submission logic here if needed
  }
});
