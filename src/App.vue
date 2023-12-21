<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<style>

.modern-dark {
    background-color: #222;
    padding: 20px;
}

body {
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
}

</style>
