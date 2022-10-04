<template>
  <headervue>
    <router-view/>
  </headervue>
  <encabezadovue/>
  <tablavue/>
  </template>
<script>
import headervue from './components/headervue.vue'
import encabezadovue from '@/components/encabezadovue.vue'
import tablavue from '@/components/tablavue.vue'




export default {
  name: 'App',
  components: {
    headervue,
    encabezadovue,
    tablavue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0%;
}
</style>
