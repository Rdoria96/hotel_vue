import { createRouter, createWebHistory } from 'vue-router'
import formulariovue from '@/components/formulariovue.vue'
import detallesvue from '@/components/detallesvue.vue'
import tablavue from '@/components/tablavue.vue'
import tipohabitaciones from '@/components/tipohabitaciones.vue'
import acomodacionesvue from '@/components/acomodacionesvue.vue'
import habitacionesvue from '@/components/habitacionesvue.vue'
import crearhabitaciones from '@/components/crearhabitacionesvue.vue'
import editarhabitacion from '@/components/editarhabitacionvue.vue'

const routes = [
    { path: "/from", name: "formulariovue", component: formulariovue },
    { path: "/detail/:id", name: "detallesvue", component: detallesvue },
    { path: "/tabla", name: "tablavue", component: tablavue },
    { path: "/tipoh", name: "tipohabitaciones", component: tipohabitaciones },
    { path: "/ac", name: "acomodacionesvue", component: acomodacionesvue },
    { path: "/habit/:id", name: "habitacionesvue", component: habitacionesvue },
    { path: "/crear/:id", name: "crearhabitaciones", component: crearhabitaciones },
    { path: "/editar/:id", name: "editarhabitacion", component: editarhabitacion }



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
