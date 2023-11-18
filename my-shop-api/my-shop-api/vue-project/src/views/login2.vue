<template>
  <div>
    <div class="login">
    <h1>Login</h1>
      <form @submit.prevent="getlogin" >
        <label for="username">email:</label>
        <input type="email" id="username" v-model="email" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <p>Pour vous inscrire, <router-link to="/register">cliquez ici</router-link>.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      login: []
    }
    
  },
  mounted() {
    
      console.log('clearlocalstorage')
      localStorage.clear()
    
  },
  methods: {
    async getlogin() {

      // Send request to server to validate username and password
      // Replace the URL with the endpoint for your server
      try{
      const response = await axios.post('http://localhost/authentication_token', {
        email : this.email,
        password : this.password
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
      
      this.status = response.status
      if (this.status == 200 || this.status == 201) {
        this.errorMessage = ''
        this.login = response.data
        console.log(this.login)
        this.$router.push('/admin')
      }
      else {
        this.errorMessage = 'Invalid username or password.'
      }
    })
      }
      catch(error){
        console.error(error)
        this.errorMessage = 'An error occurred while logging in.'
      }
    },

  }
}

</script>

<style>
.login {
  
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
  display: flex;
    flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
}
</style>