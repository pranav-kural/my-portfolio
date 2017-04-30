<template>
  <div id="app">
    <site-header></site-header>
    <landing-page></landing-page>
  </div>
</template>

<script>
import header from './vues/Header.vue';
import landingPage from './vues/Landing.vue';

export default {
  name: 'app',
  components: {
    'site-header': header,
    'landing-page': landingPage
  }
}
</script>

<style>
/*@import "assets/css/styles.css";*/
</style>
