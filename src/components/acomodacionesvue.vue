<template>
    <main class=" w-auto p-0 m-4 ">
        <div class="m-4 p-4">
            <div class="m-auto p-lg-4 bg-light rounded-3">
                <div class="flex mb-3">
                    <a class="navbar-brand ">
                        <img src="../image/personas.png" alt="" width="70" height="70"
                            class="d-inline-block align-text-top">
                    </a>
                    <h3 class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 font-medium text-3xl">
                        Tipo de habitaciones
                    </h3>
                    <div class="flex items-center mb-2">
                    </div>
                    <table class="table table-striped table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NOMBRE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="acom in acoms" :key="acom.id">
                                <td> {{acom.id}} </td>
                                <td> {{acom.name}} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
            .then(response => (this.acoms = response.data))
    },
    data() {
        return {
            acoms: []
        }
    },

}
</script>