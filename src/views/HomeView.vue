<template>
  <h2>Welcome to my store!</h2>
  <br>
  <button @click="$router.push('login')">Log In</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
});
</script>
