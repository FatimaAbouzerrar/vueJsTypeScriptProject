<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

  <NavBar/>
  <!-- <HomeView></HomeView> -->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
// import HomeView from './views/HomeView.vue';

export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
    // HomeView,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkcyan;
}

body {
  margin: 0;
}

</style>
