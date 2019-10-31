import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from "axios"
import VueAxios from "vue-axios"

import App from './App.vue'
import CurriculaPage from "./components/CurriculaPage.vue"
import EnterPage from "./components/EnterPage"

import "font-awesome/css/font-awesome.css"

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
    {path: "/", component: EnterPage},
    {
        path: "/curricula",
        component: CurriculaPage
    }
];

const router = new VueRouter({
    routes
});



new Vue({
    render: h => h(App),
    router

}).$mount('#app');
