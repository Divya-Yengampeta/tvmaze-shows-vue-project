<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "HomeView",
  components: { Navbar, Footer},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: unset;
  text-decoration: none !important;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

body {
  background: #111 !important;
}
</style>
