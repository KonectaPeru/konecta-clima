import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

 //Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAXthc6t7XWZ0cZKuyZaFcAjQS4kG-zDcA",
  authDomain: "klima-bfba1.firebaseapp.com",
  databaseURL: "https://klima-bfba1.firebaseio.com",
  projectId: "klima-bfba1",
  storageBucket: "klima-bfba1.appspot.com",
  messagingSenderId: "415651634194",
  appId: "1:415651634194:web:b14d7db27677425d278ccb",
  measurementId: "G-SD4KVV38GZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
