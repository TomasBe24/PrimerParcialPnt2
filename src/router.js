import Vue from "vue";
import VueRouter from "vue-router";

import multiChoice from './components/multiChoice.vue'
import ingresoNotas from './components/ingresoNotas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : 'history',
    routes: [
        {path: '/notas', component : ingresoNotas},
        {path: '/choice', component : multiChoice},
        {path: '/', redirect: '/notas'}
    ]
})


