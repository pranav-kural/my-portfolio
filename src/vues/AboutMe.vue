<template>
  <div id="aboutMeContainer" uk-grid>
    <div class="uk-width-2-5"></div>
    <div class="uk-width-3-5 uk-flex uk-flex-center uk-flex-middle">
      <p>Hi there! Welcome to my portfolio</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe'
}
</script>

<style lang="css">
div#aboutMeContainer {
  min-height: 75vh;
}

div#aboutMeContainer div:first-child {
  background-color: #000;
}
</style>
