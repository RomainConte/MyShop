<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="submitForm">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        <button type="submit">Submit</button>
      </form>
      <p>Pour vous connecter, <router-link to="/login">cliquez ici</router-link>.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        name: ''
      }
    },
      methods: {
        submitForm() {
          if (!this.email.includes('@') || !this.email.includes('.')) {
            alert('Invalid email format');
            return;
          }
          if (this.password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
          }
          if (!this.email || !this.password || !this.name) {
            alert('Please fill in all fields');
            return;
          }

          const yourToken = localStorage.getItem('token');
          fetch('http://localhost/api/users', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${yourToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
              fullName: this.name
            })
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.$router.push('/login');
          })
          .catch(error => {
            console.error(error);
          });
        }
      }
    }
    </script>
  