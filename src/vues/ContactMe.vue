<template>
<div id="contactMe" class="uk-flex uk-flex-center uk-flex-middle">
  <h2>I would love to hear from you &#x1F917</h2>
  <p>Please feel free to connect with me for absolutely anything. Would love to hear from you.</p>
  <a id="modal_full_button" class="uk-button uk-button-default" href="#modal-full" uk-toggle>Get in Touch</a>

  <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
          <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
          <div class="uk-modal-header">
            <h2 class="uk-modal-title uk-text-center">Get in Touch</h2>
          </div>
          <div class="uk-modal-body">
            <div class="uk-grid-collapse uk-child-width-1-3@s uk-flex-middle" uk-grid>
              <div></div>
              <form class="uk-form-stacked">

                <div class="uk-margin">
                    <label class="uk-form-label" for="contacter_name">Name</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-form-width-medium" id="contacter_name" v-model="contacter_name" type="text" placeholder="Enter Your Name" size="40" required="true">
                    </div>
                </div>

                <div class="uk-margin">
                    <label class="uk-form-label" for="contacter_email">Email</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-form-width-medium" id="contacter_email" v-model="contacter_email" type="email" placeholder="Enter Your Email Address" size="50" required="true">
                    </div>
                </div>

                <div class="uk-margin">
                    <label class="uk-form-label" for="contacter_email">Message</label>
                    <div class="uk-form-controls">
                        <textarea class="uk-textarea uk-form-width-large" id="contacter_message" v-model="contacter_message" placeholder="Enter Your Message here 😊" rows="6" cols="14" required="true"></textarea>
                    </div>
                </div>

                <div class="uk-margin">
                    <div class="uk-form-controls">
                      <button class="uk-button uk-button-primary">SEND</button>
                    </div>
                </div>

              </form>
              <div></div>
            </div>
          </div>

          <div class="uk-modal-footer"></div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'contactMe',
  data() {
    return {
      contacter_name: '',
      contacter_email: '',
      contacter_message: ''
    }
  }
}
</script>

<style lang="css">

input {
  border-radius: 3px !important;
}

#contactMe h2 {
  font-family: Raleway, sans-serif;
  color: #fff;
}

#contactMe p {
  font-family: Monsterrat, sans-serif;
  color: #fff;
}

a#modal_full_button {
  color: #000;
  background: #fff;
}

#contactMe {
  flex-direction: column;
  min-height: 300px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#febf04+0,fd7801+100 */
  background: #febf04; /* Old browsers */
  background: -moz-linear-gradient(-45deg,  #febf04 0%, #fd7801 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg,  #febf04 0%,#fd7801 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg,  #febf04 0%,#fd7801 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#febf04', endColorstr='#fd7801',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
