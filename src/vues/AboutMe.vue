<template>
  <div id="aboutMeContainer" uk-grid>
    <div class="uk-width-2-5 uk-cover-container">
      <img src="src/assets/images/portfoliopicture.jpg" alt="My profile picture" uk-cover>
    </div>
    <div class="uk-width-3-5 uk-flex uk-flex-center uk-flex-middle">
      <div>
        <p>An ambitious problem solver with a passion for making the web a better and beautiful place. Good problem solving and critical thinking skills to tackle problems and handle such situations with a reliable solution, evolved from persistent work with programming languages and coding. Understanding of general employability skills and the importance of working as part of a team, learning from others and developing as a professional.</p>
        <p> Hands on skills in web development with JavaScript, various MVC frameworks based on JS like AngularJS, Angular2, ReactJS, and in NodeJS (Meteor, Express). Web design skills using CSS3, Sass, scss and Material design, and application development skills in java, MySQL, MongoDB and android studio.</p>
      </div>
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
</style>
