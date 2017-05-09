<template lang="html">
  <div id="mySkills" class="uk-container">
    <h1 class="uk-heading-divider uk-text-center">MY SKILLS<p class="uk-text-center uk-text-meta">The skills and knowledge I've gained from schooling, self-learning and by building the awesome stuff shown above 😊</p></h1>
    <h3 class="uk-heading-divider uk-text-left">Programming</h3>
    <div class="uk-visible@m">
      <ul class="uk-child-width-expand" uk-tab="animation: uk-animation-fade">
        <li class="uk-active"><a href="">Overall</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">Java</a></li>
        <li><a href="">C#</a></li>
        <li><a href="">PHP</a></li>
        <li><a href="">HTML & CSS</a></li>
        <li><a href="">Others</a></li>
      </ul>
      <ul class="uk-switcher">
        <li>
          <overall-skills></overall-skills>
        </li>
        <li>
          <javascript-skills></javascript-skills>
        </li>
        <li>
          <java-skills></java-skills>
        </li>
        <li>
          <csharp-skills></csharp-skills>
        </li>
        <li>
          <php-skills></php-skills>
        </li>
        <li>
          <html-css-skills></html-css-skills>
        </li>
        <li></li>
      </ul>
    </div>
    <div class="uk-hidden@m">
      <ul uk-accordion>
          <li class="uk-open">
              <h3 class="uk-accordion-title">My Overall Programming skills</h3>
              <div class="uk-accordion-content">
                <overall-skills></overall-skills>
              </div>
          </li>
          <li>
              <h3 class="uk-accordion-title">JavaScript skills</h3>
              <div class="uk-accordion-content">
                <javascript-skills></javascript-skills>
              </div>
          </li>
          <li>
              <h3 class="uk-accordion-title">Java skills</h3>
              <div class="uk-accordion-content">
                <java-skills></java-skills>
              </div>
          </li>
          <li>
              <h3 class="uk-accordion-title">C# and .NET skills</h3>
              <div class="uk-accordion-content">
                <csharp-skills></csharp-skills>
              </div>
          </li>
          <li>
              <h3 class="uk-accordion-title">PHP skills</h3>
              <div class="uk-accordion-content">
                <php-skills></php-skills>
              </div>
          </li>
          <li>
              <h3 class="uk-accordion-title">HTML & CSS skills</h3>
              <div class="uk-accordion-content">
                <html-css-skills></html-css-skills>
              </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import the charts/graphs
import OverallSkills from './charts/OverallSkills.vue'
import JavaScriptSkills from './charts/JavaScriptSkills.vue'
import JavaSkills from './charts/JavaSkills.vue';
import CSharpSkills from './charts/CSharpSkills.vue';
import PHPSkills from './charts/PHPSkills.vue';
import HTML_CSS_Skills from './charts/HTML_CSS_Skills.vue';

export default {
  name: "mySkills",
  components: {
    'overall-skills': OverallSkills,
    'javascript-skills': JavaScriptSkills,
    'java-skills': JavaSkills,
    'csharp-skills': CSharpSkills,
    'php-skills': PHPSkills,
    'html-css-skills': HTML_CSS_Skills
  }
}
</script>

<style lang="css">
</style>
