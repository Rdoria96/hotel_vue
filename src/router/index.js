import { createRouter, createWebHistory } from 'vue-router'
import formulariovue from '@/components/formulariovue.vue'
import detallesvue from '@/components/detallesvue.vue'
import tablavue from '@/components/tablavue.vue'

const routes = [
    { path: "/from", name: "formulariovue", component: formulariovue },
    { path: "/detail", name: "detallesvue", component: detallesvue },
    { path: "/tabla", name: "tablavue", component: tablavue },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
