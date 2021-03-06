import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueNoty from "vuejs-noty";
import "vuejs-noty/dist/vuejs-noty.css";
import { VueSpinners } from '@saeris/vue-spinners'
Vue.use(VueNoty);
Vue.use(VueSpinners)

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");