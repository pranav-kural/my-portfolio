<template>
  <header>
  <h1 class="uk-heading-line uk-text-center uk-margin-top"><span class=" uk-text-uppercase">Pranav • Kural</span></h1>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-center">

        <ul class="uk-navbar-nav">
            <li v-bind:class="{ 'uk-active': atAboutMe }" v-on:click="setCurrentSection('aboutMe')"><a data-scroll  href="#aboutMe">About Me</a></li>
            <li v-bind:class="{ 'uk-active': atEducation }" v-on:click="setCurrentSection('education')"><a data-scroll  href="#education">Education</a></li>
            <li v-bind:class="{ 'uk-active': atWorkExp }" v-on:click="setCurrentSection('workExp')"><a data-scroll  href="#workexperience">Work Experience</a></li>
            <li v-bind:class="{ 'uk-active': atMyWork }" v-on:click="setCurrentSection('myWork')"><a data-scroll  href="#myWork">Projects</a></li>
            <li v-bind:class="{ 'uk-active': atMySkills }" v-on:click="setCurrentSection('mySkills')"><a data-scroll  href="#mySkills">Skills</a></li>
            <li v-bind:class="{ 'uk-active': atContactMe }" v-on:click="setCurrentSection('contactMe')"><a data-scroll href="#contactMe">Contact Me</a></li>
        </ul>

    </div>
  </nav>
  <hr class="uk-divider-icon uk-margin-remove">
</header>
</template>

<script>
export default {
  name: "header",
  data () {
    return {
      atAboutMe: true,
      atEducation: false,
      atWorkExp: false,
      atMyWork: false,
      atMySkills: false,
      atContactMe: false
    }
  },
  methods: {
    setCurrentSection: function (sectionTitle) {

      // set all section states to false initially
      this.atAboutMe = false; this.atEducation = false; this.atWorkExp = false; this.atMyWork = false; this.atMySkills = false; this.atContactMe = false;

      // Set the current section state to true
      switch (sectionTitle) {
        case 'aboutMe': this.atAboutMe = true;
          break;
        case 'education': this.atEducation = true;
          break;
        case 'workExp': this.atWorkExp = true;
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
/* Override navbar a tag height */
.uk-navbar-nav>li>a {
  height: 50px
}
/* White background fro navigation */
.uk-navbar-container:not(.uk-navbar-transparent) {
  background: #fff;
}
</style>
