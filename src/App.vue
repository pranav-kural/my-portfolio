<template>
  <div id="app">
    <site-header></site-header>
    <about-me></about-me>
  </div>
</template>

<script>
import header from './vues/Header.vue';
import aboutMe from './vues/AboutMe.vue';

export default {
  name: 'app',
  components: {
    'site-header': header,
    'about-me': aboutMe
  }
}
</script>

<style>
@import "assets/css/styles.css";
</style>
