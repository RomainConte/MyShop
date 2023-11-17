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

          const yourToken = " eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyMTY0NjUsImV4cCI6MTcwMDIyMDA2NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImNfcm9tYWluQG91dGxvb2suZnIifQ.g-_IoWAmqatY8HZRXu4zGlFZyWtPIxm1yo3i_qozp4aUI9yISDCVkwIfhLYtvVfcjG2WOP_sySmjssA_3TBOpVaAaKO9K7u1ozUGkCvy9rIi9e82uaGJV1uWEIFqXMeecvVYZGVWSYTeA77l-S4ZM24OxXwD1W3pDcfStjNjKb_dxGwrFY7Y_I7g5jwzxphhQ3MQC4sDYdMAooKdDgIu3Tlpyl9H9ZP7GxrQBomViWOqHsFHwk0rgyKobJH_HccmSAS0W1o6W--GxU9o1ee-aKd2CW-8-o_5VZS9tw1AT3j1ahwansNseb2_Eu_6UwCr3u33sOWkJwQq3XrfgXK6yg"
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
  