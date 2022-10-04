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
                                <a href="#"><button type="submit" class="btn btn-success">Crear
                                        hotel</button></a>

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
                                    <tbody id="data">
                                    </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <router-view></router-view>
</template>

<script>
    let url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
        .then( response => response.json() )
        .then( data => mostrarData(data) )
        .catch( error => console.log(error) )

    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length; i++) {      
        body+=`<tr><td>${data[i].name}</td><td>${data[i].NOMBRE}</td><td>${data[i].DIRECCION}</td><td>${data[i].CIUDAD}</td></td><td>${data[i].CAPACIDAD_HAB}</td><td> <a href="#"><button type="submit" class="btn btn-outline-primary">Detalles</button></a>
            <td> <a href=""><button type="submit" class="btn btn-outline-danger">Habitaciones</button></a></tr>`
        }
        document.getElementById('data').innerHTML = body
          //console.log(body)
    }
</script>