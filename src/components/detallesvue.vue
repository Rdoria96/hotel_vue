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
                                            <label class="form-label">NIT</label>
                                            <input type="text" class="form-control" required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label">NOMBRE</label>
                                            <input type="text" class="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-xl-6">
                                        <div class="form-outline">
                                            <label class="form-label">DIRECCION</label>
                                            <input type="text" class="form-control" required />
                                        </div>
                                    </div>
                                    <div class="col-xl-2">
                                        <div class="form-outline ">
                                            <label class="form-label"># HABITACIONES</label>
                                            <input type="text" class="form-control " required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-xl-6">
                                        <div class="form-outline">
                                            <select class="form-select mt-3" required>
                                                <option selected disabled value="">CIUDAD</option>
                                                <option>Monteria</option>
                                                <option>Medellin</option>
                                                <option>Bogota</option>
                                                <option>Santander</option>
                                                <option>Cartagena</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-lg mb-4 float-lg-start">Eliminar
                                        Hotel</button>
                                </div>
                                <div>
                                    <button type="submit"
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