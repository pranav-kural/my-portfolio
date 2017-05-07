<template lang="html">
  <div class="uk-container">
    <h1 class="uk-heading-divider uk-text-center">MY SKILLS<p class="uk-text-center uk-text-meta">The skills and knowledge I've gained from schooling, self-learning and by building the awesome stuff shown above 😊</p></h1>
    <h3 class="uk-heading-divider uk-text-left">Programming</h3>
    <ul class="uk-child-width-expand uk-visible@s" uk-tab="animation: uk-animation-fade">
      <li class="uk-active"><a href="">Overall</a></li>
      <li><a href="">JavaScript</a></li>
      <li><a href="">Java</a></li>
      <li><a href="">CSS</a></li>
      <li><a href="">HTML</a></li>
      <li><a href="">C#</a></li>
      <li><a href="">NodeJS</a></li>
      <li><a href="">Others</a></li>
    </ul>
    <ul class="uk-switcher uk-margin">
      <li>
        <overall-skills></overall-skills>
      </li>
      <li>
        <javascript-skills></javascript-skills>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</template>

<script>
// import the charts/graphs
import OverallSkills from './charts/OverallSkills.vue'
import JavaScriptSkills from './charts/JavaScriptSkills.vue'


export default {
  name: "mySkills",
  components: {
    'overall-skills': OverallSkills,
    'javascript-skills': JavaScriptSkills
  }
}
</script>

<style lang="css">
</style>
