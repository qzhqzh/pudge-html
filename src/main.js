import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './prototype/variables';
import {BootstrapVue, IconsPlugin, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'node_modules/vditor/src/assets/scss/index.scss' // Or use dark




Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
    // beforeCreate: function () {
    //     console.log(this.$appName);
    //     console.log(this.$baseUrl);
    // },
    router,
    render: h => h(App),
}).$mount('#app')
