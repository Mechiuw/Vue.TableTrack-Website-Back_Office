<script setup>
  import LoginBanner from './LoginBanner.vue'
import LoginInput from './LoginInput.vue';
</script>

<template>
  <div class="login-viewport">
    <LoginBanner/>
    <LoginInput/>
  </div>
</template>

<style scoped>
.login-viewport{
  display: flex;
  justify-content: space-between;
}
</style>
  