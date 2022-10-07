<template >
    <main class="w-auto p-0 m-4">
        <div class="m-4 p-4">
            <div class="m-auto p-lg-4 bg-light rounded-3">
                <div class="flex mb-3">
                    <router-link class="navbar-brand " to="/">
                        <img src="../image/icons8-home-24.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Inicio
                    </router-link>
                    <router-link class="navbar-brand " to="/tabla">
                        <img src="../image/simbolo.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Hoteles
                    </router-link>
                    <a class="navbar-brand text-primary">
                        <img src="../image/simbolo.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Actulizar Datos
                    </a>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <a class="navbar-brand ">
                            <img src="../image/logo.png" alt="" width="70" height="70"
                                class="d-inline-block align-text-top">
                        </a>
                        <h3 class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 font-medium text-3xl">
                            Hotel
                        </h3>
                        <div class="m-5 rounded-3 p-lg-2">
                            <form>
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label for="nombre" class="form-label">Nombre</label>
                                            <input v-model="hotel.name" type="text" class="form-control" id="nombre"
                                                required>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label for="nit" class="form-label">NIT</label>
                                            <input v-model="hotel.nit" type="text" class="form-control" id="nit"
                                                required>
                                            <div v-if="errores.nit" style="color:red" role="alert">{{errores.nit[0]}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-xl-6">
                                        <div class="form-outline">
                                            <label for="direccion" class="form-label">Dirección</label>
                                            <input v-model="hotel.address" type="text" class="form-control"
                                                id="direccion" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-2">
                                        <div class="form-outline ">
                                            <label for="nro_habitaciones" class="form-label">Nro de habitaciones</label>
                                            <input v-model="hotel.num_rooms" type="text" class="form-control"
                                                id="nro_habitaciones" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-xl-6">
                                        <div class="form-outline">
                                            <label for="ciudad" class="form-label">Ciudad</label>
                                            <select class="form-select" id="ciudad" v-model="hotel.city_id">
                                                <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{
                                                ciudad.name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div id="message"> </div>

                                <div>
                                    <button type="button" @click="eliminar()"
                                        class="btn btn-lg mb-4 float-lg-start">Eliminar
                                        Hotel</button>
                                </div>
                                <div>
                                    <button type="button" @click="update()"
                                        class="btn btn-outline-danger btn-block mb-4 float-lg-end">Actualizar
                                        Datos</button>
                                </div>
                                <!-- Submit button -->

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            errores: {
                nit: null
            },
            cities: [],
            hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null
            }
        }
    },
    mounted: function () {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
            .then(response => {
                this.hotel.name = response.data.data.name;
                this.hotel.nit = response.data.data.nit;
                this.hotel.address = response.data.data.address;
                this.hotel.num_rooms = response.data.data.num_rooms;
                this.hotel.city_id = response.data.data.city.id;
            })
    },
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
            .then(response => (this.cities = response.data))
    },

    methods: {
        actualizar() {
            axios.put('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels', this.hotel)
                .then(datos => {
                    console.log(datos);
                })
        },
        async eliminar() {
            var opcion = confirm("Seguro que desea eliminar este hotel?");
            if (opcion == true) {
                axios({
                    method: 'DELETE',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id,
                    responseType: 'json',
                })
                    .then(response => {
                        this.info = response.data.message
                        this.Alerta(this.info, 'alert-success')
                    })
                    .catch(error => {
                        this.errores = error.response.data.message
                        this.Alerta(this.errores, 'alert-danger')
                    })

            } else {
                mensaje = "Has clickado Cancelar";
            }


        },

        async update() {
            // this.errors = Objects
            this.error = false
            this.info = false
            axios({
                method: 'put',
                url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id,
                data: this.hotel,
                responseType: 'json',
            })
                .then(response => {

                    this.info = response.data.message
                    this.Alerta(this.info, 'alert-success')

                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    this.Alerta(this.errores, 'alert-danger')

                })

        },

        Alerta(msj, type) {
            document.getElementById("message").innerHTML = '<div class="alert ' + type + '" role="alert">' +
                msj + '</div>';
        },
    }
}
</script>