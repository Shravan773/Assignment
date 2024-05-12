const app = new Vue({
  el: '#app',
  data: {
    title: 'Sign in',
    usernameEmail: '',
    password: '',
    rememberMe: false,
    isPasswordVisible: true,
    errorMessage: ''
  },
  methods: {
    submitForm() {
      if (!this.usernameEmail) {
        this.errorMessage = 'Please enter your username or email address.';
        return;
      }
      if (!this.isValidEmail(this.usernameEmail)) {
        this.errorMessage = 'Please enter a valid email address.';
        return;
      }
      if (!this.password) {
        this.errorMessage = 'Please enter your password.';
        return;
      }
      alert('You have successfully logged in.');
      this.errorMessage = ''; // Clear error message after successful login
    },
    forgotPassword() {
      const email = prompt('Please enter your email address to reset your password:', this.usernameEmail);
      if (email) {
        alert('A password reset link has been sent to your email address.');
      }
    },
    togglePassword() {
      this.isPasswordVisible = !this.isPasswordVisible; 
    },
    showTermsAlert() {
      alert('Terms and Conditions:\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, eros sit amet ultricies tincidunt.\n\nBy clicking "OK", you agree to the terms and conditions.');
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
});
