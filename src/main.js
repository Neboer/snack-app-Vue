import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCoookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Antd);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueCoookies);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    render: h => h(App)
}).$mount("#app");
