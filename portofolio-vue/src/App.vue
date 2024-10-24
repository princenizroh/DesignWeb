<template>
  <div id="app">
    <UserLogin v-if="!isLoggedIn" @loginSuccess="isLoggedIn = true" />
    <UserDashboard v-else @logout="isLoggedIn = false" />
  </div>
</template>

<script>
import UserLogin from './components/UserLogin.vue'; 
import UserDashboard from './components/UserDashboard.vue'; 
export default {
  name: 'App',
  components: {
    UserLogin,
    UserDashboard,
  },
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
