<template>
    <nav class="navbar navbar-expand bg-light ">
        <div class="container-fluid max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
            <a class="navbar-brand " href="#">
                <img src="@/image/logo.png" alt="" width="70" height="70" class="d-inline-block align-text-top">
            </a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link active text-primary" to="/">Inicio</router-link>
                    <router-link class="nav-link  text-secondary" to="/tabla">Hoteles</router-link>
                    <router-link class="nav-link text-success" to="/tipoh">Tipo de habitaciones</router-link>
                    <router-link class="nav-link text-warning" to="/ac">Acomodaciones</router-link>
                </div>
            </div>
        </div>
    </nav>

</template>