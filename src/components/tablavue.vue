<template>
    <main class=" w-auto p-0 m-4 ">
        <div class="m-4 p-4">
            <div class="m-auto p-lg-4 bg-light rounded-3">
                <div>
                    <div class="flex items-center mb-2">
                        <a class="navbar-brand ">
                            <img src="../image/logo.png" alt="" width="70" height="70"
                                class="d-inline-block align-text-top">
                        </a>
                        <h3 class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 font-medium text-3xl">
                            Hoteles
                        </h3>
                        <div
                            class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 float-lg-end font-medium text-3xl">
                            <div>
                                <button type="submit" @click="viewFormHotelCreate" class="btn btn-success">Crear
                                    hotel</button>
                            </div>
                        </div>
                    </div>
                    <div class="container mt-4  p-3 mb-5 bg-body rounded">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>NIT</th>
                                    <th>NOMBRE</th>
                                    <th>DIRECCION</th>
                                    <th>CIUDAD</th>
                                    <th>CAPACIDAD_HAB</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="hotel in hotels" :key="hotel.id">
                                    <td> {{hotel.nit}} </td>
                                    <td> {{hotel.name}} </td>
                                    <td> {{hotel.address}} </td>
                                    <td> {{hotel.city.name}} </td>
                                    <td> {{hotel.num_rooms}} </td>
                                    <td>
                                        <button @click="edit(hotel.id)" class="btn btn-warning btn-sm">Detalle
                                        </button>
                                    </td>
                                    <td>
                                        <button @click="habita(hotel.id)" class="btn btn-success btn-sm">Habitaciones
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- <details :id="hotel.id"></details> -->
</template>

<script>
import axios from 'axios'
export default {
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
            .then(response => (this.hotels = response.data.data))
    },
    data() {
        return {
            hotels: []
            // id: hotels.id
        }
    },
    methods: {
        viewFormHotelCreate() {
            this.$router.push({ name: 'formulariovue' })
        },
        edit(id) {
            window.location.href = "/detail/" + id;
        },
        habita(id) {
            window.location.href = '/habit/' + id;
        }
    },


}
</script>
