<template>
  <nav>
    <router-link to="/">Movies</router-link> |
    <router-link to="/movie-detail/0">Movie detail</router-link> |
    <router-link to="/movie-search">Movie search</router-link> |
    <router-link to="/people">People</router-link> |
    <router-link to="/demo-watch">Watch</router-link> |
    <router-link to="/count">Count</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
