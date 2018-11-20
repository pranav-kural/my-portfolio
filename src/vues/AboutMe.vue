<template>
  <div id="container" uk-grid>
     <div id="aboutMeBackground" class="uk-width-2-5">
       <div>
         <div>
         </div>
       </div>
     </div>
     <div class="uk-width-3-5 uk-flex uk-flex-center uk-padding">
       <div id="aboutMeContainer" class="uk-padding">
         <blockquote>"Our greatest glory is not in never falling, but in rising every time we fall."</blockquote>
         <h6> - Confucius</h6>
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
  background: url('images/background.jpg') no-repeat;
  background-size: cover;
}

div#aboutMeBackground div {
  min-height: 100%;
  min-width: 100%;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+82&0+51,1+100 */
  background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0) 51%, rgba(255,255,255,0.63) 82%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 51%,rgba(255,255,255,0.63) 82%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 51%,rgba(255,255,255,0.63) 82%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */

}

div#aboutMeBackground div div {
  min-height: 80vh;
  min-width: 100%;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+82&0+51,1+100 */
  background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0) 51%, rgba(255,255,255,0.63) 82%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 51%,rgba(255,255,255,0.63) 82%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 51%,rgba(255,255,255,0.63) 82%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

}

div#container {
  min-height: 80vh;
}

div#aboutMeContainer {
  border-radius: 30px;
  font-family: Montserrat, Helvetica, sans-serif;
}
</style>
