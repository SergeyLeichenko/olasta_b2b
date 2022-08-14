import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ApiPlugin from "./plugins/api";
import LoadPlugin from "./plugins/load";
import Vuelidate from "vuelidate";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/style/main.scss";

Vue.config.productionTip = false;
axios.defaults.baseURL = "https://sellpoint-b2b.herokuapp.com/uk/";
axios.defaults.withCredentials = true;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(ApiPlugin);
Vue.use(LoadPlugin);
Vue.use(Vuelidate);

Vue.component("Header", require("@/components/base/Header.vue").default);
Vue.component("Footer", require("@/components/base/Footer.vue").default);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
