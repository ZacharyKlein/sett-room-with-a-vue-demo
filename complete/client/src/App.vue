<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
    <router-link to="/">Home</router-link> |
    <router-link to="/books">Manage Books</router-link> |
    <router-link to="/authors">Manage Authors</router-link>
    <br/>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
