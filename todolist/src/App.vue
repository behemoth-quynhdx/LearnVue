<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signin">Sign In</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/tasklist">Task List</router-link>
  </nav>
  <router-view />
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
#app {
  font-family: Pacifico;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration-line: none;
}

nav a.router-link-exact-active {
  color: #3170bc;
}
</style>
