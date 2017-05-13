<template>
  <div id="aboutMeBackground" class="">
    <div id="aboutMeContainer" class="uk-flex uk-flex-right uk-flex-middle">
      <div class="uk-section">
        <div class="uk-container-small uk-padding">
          <p>An ambitious problem solver with a passion for making the web a better and beautiful place. Good problem solving and critical thinking skills to tackle problems and handle such situations with a reliable solution, evolved from persistent work with programming languages and coding. Understanding of general employability skills and the importance of working as part of a team, learning from others and developing as a professional.</p>
        </div>
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
div#aboutMeBackground {
  height: auto;
  background: url('image.jpg');
  background-size: 75%;
}

div#aboutMeContainer {
  min-height: 80vh;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+70&0+0,1+50 */
  background: -moz-linear-gradient(-45deg,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 70%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,1) 70%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,1) 70%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

}

div#aboutMeContainer .uk-section {
  background: #EEEEEE;
  padding: 0;
  border-radius: 50px;
  opacity: 0.8;
  margin-left: 30%;
  color: #000;
}

div#aboutMeContainer .uk-container-small {
  max-width: 500px;
}

div#aboutMeContainer {
  justify-content: center;
}
</style>
