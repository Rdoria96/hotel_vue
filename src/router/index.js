import { createRouter, createWebHistory } from 'vue-router'
import formulariovue from '@/components/formulariovue.vue'

const routes = [
    { path: "/from", name: "formulariovue", component: formulariovue }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
