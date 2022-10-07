<template>
    <main class="w-auto p-0 m-4">
        <div class="m-4 p-4">
            <div class="m-auto p-lg-4 bg-light rounded-3">
                <div class="flex mb-3">
                    <a class="navbar-brand " href="index.html">
                        <img src="../image/icons8-home-24.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Inicio
                    </a>
                    <a class="navbar-brand " href="tabla.html">
                        <img src="../image/simbolo.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Hoteles
                    </a>
                    <a class="navbar-brand " href="habitaciones.html">
                        <img src="../image/simbolo.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Hotel
                    </a>
                    <a class="navbar-brand text-primary">
                        <img src="../image/simbolo.png" alt="" width="24" height="24"
                            class="d-inline-block align-text-top p-1">
                        Nueva habitiación
                    </a>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <a class="navbar-brand ">
                            <img src="../image/logo.png" alt="" width="70" height="70"
                                class="d-inline-block align-text-top">
                        </a>

                        <div class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 font-medium text-3xl"
                            id="nameH"></div>
                        <div id="numRooms"></div>
                        <div class="m-5 rounded-3 p-lg-2">
                            <form>
                                <div class="row mb-4">
                                    <div class="col-xl-6">
                                        <div class="form-outline">
                                            <label class="form-label">TIPO DE HABITACIÓN</label>
                                            <select class="form-select" v-model="hotel.room_type_id">
                                                <option v-for="tipoa in Acomodacion" :value="tipoa.id" :key="tipoa.id">
                                                    {{
                                                    tipoa.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-outline">
                                            <label class="form-label">ACOMODACIÓN</label>
                                            <select class="form-select" v-model="hotel.accommodation_id">
                                                <option v-for="room in romms" :value="room.id" :key="room.id">{{
                                                room.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-xl-2">
                                        <div class="form-outline ">
                                            <label class="form-label">Cantidad</label>
                                            <input type="number" class="form-control" v-model="hotel.quantity"
                                                required />
                                        </div>
                                    </div>
                                </div>
                                <div id="m"> </div>
                                <div>
                                    <button type="button" @click="crearh"
                                        class="btn btn-outline-info btn-block mb-4 float-lg-end">Crear
                                        habitaciones</button>
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
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
            .then(response => (this.Acomodacion = response.data))

        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
            .then(response => (this.romms = response.data))

        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
            .then(response => {
                this.hotels = response.data
                document.getElementById("nameH").innerText = this.hotels.data.name;
                document.getElementById("numRooms").innerText = "Número de habitaciones: " + this.hotels.data.num_rooms;
            })
    },

    data() {
        return {
            errores: {
                nit: null
            },
            info: null,
            Acomodacion: [],
            romms: [],

            hotel: {
                hotel_id: this.$route.params.id,
                room_type_id: null,
                accommodation_id: null,
                quantity: null
            },

        }

    },
    mounted: function () {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/show/' + this.$route.params.id)
            .then(response => {
                this.hotel = response.data.data;
                console.log(this.hotel)
            })
    },

    methods: {

    }

}
</script>