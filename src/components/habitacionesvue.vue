<template>
    <main class=" w-auto p-0 m-4 ">
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
                        Habitaciones
                    </a>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <a class="navbar-brand ">
                            <img src="../image/logo.png" alt="" width="70" height="70"
                                class="d-inline-block align-text-top">
                        </a>
                        <h3 class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 font-medium text-3xl">
                            NAME HOTELES
                        </h3>
                        <div
                            class="d-inline-block align-text-top m-1 p-1 mx-lg-1 m-lg-3 float-lg-end font-medium text-3xl">
                            <div>
                                <a href="crear_habitaciones.html"><button type="submit" class="btn bg-primary">Crear
                                        habitaciones</button></a>

                            </div>
                        </div>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">TIPO</th>
                                <th scope="col">ACOMODACI&Oacute;N</th>
                                <th scope="col">CANTIDAD</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>JUNIOR</td>
                                <td>TRIPLE</td>
                                <td>5</td>
                                <td> <a href="actualizar_habitacion.html"><button type="submit"
                                            class="btn btn-warning">Editar</button></a>
                                </td>
                                <td> <a href=""><button type="submit" class="btn btn-danger">Eliminar</button></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>ESTANDAR</td>
                                <td>SENCILLA</td>
                                <td>6</td>
                                <td> <a href="actualizar_habitacion.html"><button type="submit"
                                            class="btn btn-warning">Editar</button></a>
                                </td>
                                <td> <a href=""><button type="submit" class="btn btn-danger">Eliminar</button></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>