<template>
    <main class=" w-auto p-0 m-4 ">
        <div class="m-4 p-4">
            <div class="m-auto p-lg-4 bg-light rounded-3">
                <div class="flex mb-3">
                    <router-link class="navbar-brand " to="/"> <img src="../image/icons8-home-24.png" alt="" width="24"
                            height="24" class="d-inline-block align-text-top p-1">
                        Inicio</router-link>
                    <router-link class="navbar-brand " to="/tabla">
                        <img src="../image/simbolo.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Hoteles
                    </router-link>
                    <a class="navbar-brand text-primary">
                        <img src="../image/simbolo.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Habitaciones
                    </a>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <a class="navbar-brand ">
                            <img src="../image/logo.png" alt="" width="70" height="70"
                                class="d-inline-block align-text-top">
                        </a>
                        <div class="d-inline-block align-text-top  mx-lg-1 m-lg-3 font-medium text-3xl">
                            <div class=" mx-3 font-medium text-3xl h2" id="nameH"></div>
                            <div class="mx-3" id="numRooms"></div>
                        </div>
                        <div
                            class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 float-lg-end font-medium text-3xl">
                            <div>
                                <button @click="crear(this.hotels.id)" class="btn bg-primary ">Crear
                                    habitaci&oacute;n</button>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>TIPO</th>
                                <th>ACOMODACI&Oacute;N</th>
                                <th>CANTIDAD</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="hotel in acoms" :key="hotel.id">
                                <td> {{hotel.type.name}} </td>
                                <td> {{hotel.accommodation.name}} </td>
                                <td> {{hotel.quantity}} </td>
                                <td> <button type="submit" @click="editar(hotel.id)"
                                        class="btn btn-warning">Editar</button>
                                </td>
                                <td> <button type="submit" @click="eliminar(hotel.id)"
                                        class="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="message"> </div>
            </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios'
export default {
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/' + this.$route.params.id)
            .then(response => (this.acoms = response.data.data))
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
            .then(response => {
                this.hotels = response.data
                document.getElementById("nameH").innerText = this.hotels.data.name;
                document.getElementById("numRooms").innerText = "N??mero de habitaciones: " + this.hotels.data.num_rooms;
            })
    },

    data() {
        return {
            acoms: [],
            hotels: []
        }
    },
    methods: {
        crear(hotelId) {
            this.$router.push({ name: 'crearhabitaciones', params: hotelId })
        },
        editar(id) {
            this.$router.push({ name: 'editarhabitacion', params: { id } })
        },
        async eliminar(id) {
            console.log(id);
            var opcion = confirm("Seguro que desea eliminar este hotel?");
            if (opcion == true) {
                axios({
                    method: 'DELETE',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/' + id,
                    responseType: 'json',
                })
                    .then(response => this.Alerta(response.statusText, 'alert-success'))
                    .catch(error => this.Alerta(error.response, 'alert-danger'))
            }
        },

        Alerta(msj, type) {
            document.getElementById("message").innerHTML = '<div class="alert ' + type + '" role="alert">' +
                msj + '</div>';
        }
    },



}
</script>