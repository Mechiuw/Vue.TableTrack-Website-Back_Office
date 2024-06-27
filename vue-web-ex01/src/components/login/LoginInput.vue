<template>
  <div class="login-input form-group">
    <div class="mb-5 container-title-login">
      <h1 class="title-login-main">Login</h1>
      <h5 class="title-login">Hey There, Welcome back!<br/>please login to your account</h5>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="mb-2 lbl">Username</label>
        <input class="form-control inp" v-model="username" type="email" />
      </div>
      <div class="mb-4"> 
        <label class="mb-2 lbl">Password</label>
        <input class="form-control inp" v-model="password" type="password"/>
      </div>
      <div class="mb-5 d-flex" id="remember-line">
        <div class="d-flex">
          <input class="me-3" type="checkbox"/>
          <label style="font-weight: 400;">Remember me!</label>
        </div>
        <div>
          <h6 style="font-weight: 400;">contact us</h6>
        </div>
      </div>
      <button type="submit" class="btn btn-dark submit-login-btn">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleSubmit = () => {
  console.log('Username:', username.value);
  console.log('Password:', password.value);
}
</script>

<style scoped>
.login-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-content: center;
  width: 50%;
  padding: 80px;
}
#remember-line {
  justify-content: space-between;
}
.submit-login-btn {
  width: 100%;
  height: 7vh;
  font-size: larger;
  background-color: #E74C3C;
  border: 0;
}
.title-login-main {
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 330%;
  margin-bottom: 15px;
}
.title-login {
  font-weight: 400;
  color: grey;
  margin-bottom: 5px;
}
.lbl {
  font-size: large;
  color: grey;
}
.inp {
  height: 35px;
}
.container-title-login {
  text-align: center;
}
</style>
