import Vue from 'vue';
import App from './App.vue';
window.$ = window.jQuery = require('jquery');
new Vue({
  el: '#app',
  render: h => h(App)
});