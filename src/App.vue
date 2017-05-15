<template>
  <!-- Parent Vue -->
  <div id="app">
    <!-- website components -->
    <site-header></site-header>
    <about-me></about-me>
    <my-education></my-education>
    <my-work-experience></my-work-experience>
    <my-work></my-work>
    <my-skills></my-skills>
    <contact-me></contact-me>
    <site-footer></site-footer>
  </div>
</template>

<script>
// Importing the website compenents
import header from './vues/Header.vue';
import aboutMe from './vues/AboutMe.vue';
import myEduction from './vues/MyEducation.vue';
import myWorkExperience from './vues/MyWorkExperience.vue';
import myWork from './vues/MyWork.vue';
import mySkills from './vues/MySkills.vue';
import contactMe from './vues/ContactMe.vue';
import footer from './vues/Footer.vue';

// Exporting the Top most parent component - App
export default {
  name: 'app',
  components: {
    'site-header': header,
    'about-me': aboutMe,
    'my-education': myEduction,
    'my-work-experience': myWorkExperience,
    'my-work': myWork,
    'my-skills': mySkills,
    'contact-me': contactMe,
    'site-footer': footer
  }
}
</script>

<style>
/* Importing the website style sheet */
@import "assets/css/styles.css";
</style>
