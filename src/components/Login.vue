<!-- eslint-disable vue/multi-word-component-names -->

<!-- Login.vue -->
<template>
  <div class="login-container">
    <h1>LOGIN</h1>
    <form @submit.prevent="verifyUser" class="login-form">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit" class="login-btn">Log In</button>
    </form>
    <p v-if="loginError" class="error-message">{{ loginError }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loginError: "",
    };
  },
  methods: {
    verifyUser() {
      if (this.username === "admin" && this.password === "admin") {
        this.loginError = "";
        // Ito yung magcocommit ng mutation na nilagay ko sa books.js para pag nag login success yung parameter na true is ipapasa sa named "value"
        this.$store.commit("setUserAuthenticated", true);
        this.$router.push("/");
      } else {
        this.loginError = "Incorrect username or password. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 4%;
}
.login-container {
  max-width: 300px;
  margin-left: 40%;
  margin-top: 10%;
}
.login-form {
  display: flex;
  flex-direction: column;
}

.login-form input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-btn {
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
