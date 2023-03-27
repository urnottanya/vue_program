<template>
  <div id="app">

<!--    <Main/>-->
      <router-link to="pages/Home" active-class="true"></router-link>
      <router-view></router-view>
<!--      <Main/>-->
  </div>
</template>

<script>

// import Main from "./components/Main";
export default {
  name: 'App',
  components: {
      // Main
  }
}
</script>

<style>
    html,body{
        padding: 0;
        margin: 0;
    }
    #app {
        height: 100vh;
    }
</style>
