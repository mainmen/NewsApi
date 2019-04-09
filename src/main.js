import Vue from "vue";
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
// add this two import statements
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  }, // add this to initialize AOS
  router,
  store,
  render: h => h(App)
}).$mount("#app");
