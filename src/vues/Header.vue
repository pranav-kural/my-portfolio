<template>
  <header>
  <h1 class="uk-heading-line uk-text-center uk-margin-top"><span>Pranav Kural</span></h1>
  <nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-center">

        <ul class="uk-navbar-nav">
            <li v-bind:class="{ 'uk-active': atAboutMe }" v-on:click="setCurrentSection('aboutMe')"><a href="#aboutMe">About Me</a></li>
            <li v-bind:class="{ 'uk-active': atMyWork }" v-on:click="setCurrentSection('myWork')"><a href="#">My Work</a></li>
            <li v-bind:class="{ 'uk-active': atMySkills }" v-on:click="setCurrentSection('mySkills')"><a href="#">My Skills</a></li>
            <li v-bind:class="{ 'uk-active': atContactMe }" v-on:click="setCurrentSection('contactMe')"><a href="#">Contact Me</a></li>
        </ul>

    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: "header",
  data () {
    return {
      atAboutMe: true,
      atMyWork: false,
      atMySkills: false,
      atContactMe: false
    }
  },
  methods: {
    setCurrentSection: function (sectionTitle) {

      // set all section states to false initially
      this.atAboutMe = false; this.atMyWork = false; this.atMySkills = false; this.atContactMe = false;

      // Set the current section state to true
      switch (sectionTitle) {
        case 'aboutMe': this.atAboutMe = true;
          break;
        case 'myWork': this.atMyWork = true;
          break;
        case 'mySkills': this.atMySkills = true;
          break;
        case 'contactMe': this.atContactMe = true;
          break;
      }
    }
  }
}
</script>

<style lang="css">
</style>
