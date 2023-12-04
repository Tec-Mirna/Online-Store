


document.querySelector('#app').innerHTML = `
<header class="todo-header">
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="logo" href="#">TECno-PcMania</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ofertas 🔥</a>
        </li>
        <li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ordenadores 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Lenovo</a></li>
            <li><a class="dropdown-item" href="#">HP</a></li>
            <li><a class="dropdown-item" href="#">Samsung</a></li>
            <li><a class="dropdown-item" href="#">Asus</a></li>
            <li><a class="dropdown-item" href="#">Accer</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Otras MARCAS</a></li>
          </ul>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="boton-header" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
</header>

<div class="container" id="container">

<section class="card mb-11 mx-auto" style="max-width: 800px;">
  <div class="row">
    <div class="col-md-4 ">
      <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1701201932/2_goiu6v.webp" class="img-fluid  ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Laptop HP Intel Core i3-1115g4 8GB RAM + 256GB SSD ROM</h5><br>
      <!--   Crea una lista  -->
        <ul>
          <li>Procesador: Intel Core i3-1115G4</li>
          <li>Memoria de almacenamiento: 256GB</li>
          <li>Memoria RAM: 8GB</li>
          <li>Tipo de Disco: SSD</li>
          <li>Tamaño de pantalla: 14" pulgadas</li>
        </ul>
        <h5 class="precio">$379.00</h5>
        <div class="text-center"> <!-- Centra el boton -->
        <button type="button" class="btn btn-outline-success"  id="soldBtn" onclick="changeButton(this)">Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>

<section class="card mb-11 mx-auto" style="max-width: 800px;">
  <div class="row">
    <div class="col-md-4 ">
      <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1701397317/3_oh5e3u.webp" class="img-fluid  ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Laptop HP gaming Victus Intel Core i5-12450H 16GB RAM + 512GB SSD + Nvidia RTX 3050</h5><br>
      <!--   Crea una lista  -->
        <ul>
          <li>Procesador: Intel Core i5-12450H</li>
          <li>Memoria de almacenamiento: 512GB SSD</li>
          <li>Memoria RAM: 16 GB</li>
          <li>Tipo de Disco: SSD</li>
          <li>Tamaño de pantalla: 15.6" pulgadas</li>
        </ul>
        <h5 class="precio">$1,099.00</h5>
        <div class="text-center"> <!-- Centra el boton -->
        <button type="button" class="btn btn-outline-success"  id="soldBtn" onclick="changeButton(this)">Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>

<section class="card mb-11 mx-auto cards" style="max-width: 800px;">
  <div class="row ">
    <div class="col-md-4 ">
      <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1701202202/1_vcqitj.webp" class="img-fluid  ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Laptop Lenovo Ideapad 3 AMD Ryzen 5-5500U 8GB RAM + 512GB SSD</h5><br>
       
        <ul>
          <li>Procesador: AMD Ryzen 5-5500U</li>
          <li>Memoria de almacenamiento: 512GB SSD</li>
          <li>Memoria RAM: 8GB</li>
          <li>Tipo de Disco: SSD</li>
          <li>Tamaño de pantalla: 15.6" Pulgadas</li>
        </ul>
        <h5 class="precio">$529.00</h5>
        <div class="text-center"> <!-- Centra el boton -->
        <button type="button" class="btn btn-outline-success" id="soldBtn"  onclick="changeButton(this)" >Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>

<section class="card mb-11 mx-auto cards" style="max-width: 800px;">
  <div class="row ">
    <div class="col-md-4 ">
      <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1701397864/4_ixo4ri.webp" class="img-fluid  ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Laptop Lenovo 2 en 1 AMD Ryzen 7-5700u 12GB RAM + 512GB SSD ROM</h5><br>
     
        <ul>
          <li>Procesador: AMD Ryzen 7 5700U</li>
          <li>Memoria de almacenamiento: 512 GB SSD</li>
          <li>Memoria RAM: 12 GB</li>
          <li>Tipo de Disco: SSD</li>
          <li>Tamaño de pantalla: 15.6" Pulgadas</li>
        </ul>
        <h5 class="precio">$949.00</h5>
        <div class="text-center"> <!-- Centra el boton -->
        <button type="button" class="btn btn-outline-success" id="soldBtn"  onclick="changeButton(this)" >Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>

<section class="card mb-11 mx-auto cards" style="max-width: 800px;">
  <div class="row ">
    <div class="col-md-4 ">
      <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1701399857/6_tu5j10.webp" class="img-fluid  ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Laptop Dell Inspiron 3520 Intel Core i7-1255u 8GB RAM + 512GB SSD</h5><br>
       
        <ul>
          <li>Procesador: Intel Core i7-1255U</li>
          <li>Memoria de almacenamiento: 512GB SSD</li>
          <li>Memoria RAM: 8 GB</li>
          <li>Tipo de Disco: SSD</li>
          <li>Tamaño de pantalla: 15.6" pulgadas</li>
        </ul>
        <h5 class="precio">$947.00</h5>
        <div class="text-center"> <!-- Centra el boton -->
        <button type="button" class="btn btn-outline-success" id="soldBtn"  onclick="changeButton(this)" >Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>

<section class="card mb-11 mx-auto cards" style="max-width: 800px;">
  <div class="row ">
    <div class="col-md-4 ">
      <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1701400551/5_trviva.webp" class="img-fluid  ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Laptop Asus Vivobook AMD Ryzen 5-5600H 8GB RAM + 256GB SSD ROM</h5><br>
     
        <ul>
          <li>Procesador: AMD Ryzen 5 5600H</li>
          <li>Memoria de almacenamiento: 256GB</li>
          <li>Memoria RAM: 8 GB</li>
          <li>Tipo de Disco: SSD</li>
          <li>Tamaño de pantalla: 15.6" pulgadas</li>
        </ul>
        <h5 class="precio">$550.00</h5>
        <div class="text-center"> <!-- Centra el boton -->
        <button type="button" class="btn btn-outline-success" id="soldBtn"  onclick="changeButton(this)" >Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>




`


 //Función para cambiar el texto y el color al boton al hacer clic
 function changeButton(button, added) {
 
  button.innerHTML = added ? "Añadido al carrito" : "Añadir al carrito"
  button.classList.toggle('btn-outline-success', !added);
  button.classList.toggle('btn-danger', added);
     
}
//Inicio de sesión

/* document.getElementById('showLoginForm').addEventListener('click', function() {
  var loginForm = document.getElementById('loginForm');
  loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}); */



document.addEventListener("DOMContentLoaded", () => {
   /* Con querySelectorAll Se seleccionan todos los botones que contienen la clase soldBtn  */
    let soldButton = document.querySelectorAll("#soldBtn");
    /* Con querySelector Se selecciona el boton con el id  lightBtn */
    let lightBtn = document.querySelector("#lightBtn");
  
    // Agrega un evento de clic al botón
    /* Todos los botones muestran la misma alerta */
    soldButton.forEach((button) => {
      let added = false; //Controla el estado del boton

        button.addEventListener("click", () => {

          if(!added){
              // Muestra alertas distintas(según el estado del boton) al hacer clic en el botón
              Swal.fire({
     
                text: "Se ha añadido un nuevo producto a tu carrito.",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTp7S4vNNnfo-V1vZFwbBB2H0EtX0aPcDxjs60XhmQf8veX1yCjoRpRaspEZZGG70WhM&usqp=CAU",
                imageWidth: 200,
                imageHeight: 150,
                confirmButtonText: "Aceptar", 
               })
               added = true
              }
              else {
                Swal.fire({
    
                  text: "¿Deseas retirar este producto de tu carrito?",
                  imageUrl: "https://cdn-icons-png.flaticon.com/512/5412/5412816.png",
                  imageWidth: 200,
                  imageHeight: 150,
                  showCancelButton: true,
                  confirmButtonText: "Aceptar",
                  cancelButtonText: "Cancelar",
                  reverseButtons: true
                }) .then((result) => {
                  if(result.isConfirmed){
                    added = false
                    changeButton(button, false)
                  }
                })
              }
              if(added){
              changeButton(button, true)
              }
            })

                // Agrega un evento de clic al botón lightBtn
                let darkMode=false

                lightBtn.addEventListener("click", () => {
                    if(darkMode){
                        changeButtonLightMode(lightBtn, true)
                        darkMode=false
                    }
                    else{
                        changeButtonLightMode(lightBtn, false) 
                        darkMode=true
                    }
                }) 
        });

    });



        //Función para cambiar el texto y el color al boton al hacer clic
        function changeButton(button, added) {
 
           button.innerHTML = added ? "Añadido al carrito" : "Añadir al carrito"
           button.classList.toggle('btn-outline-success', !added);
           button.classList.toggle('btn-danger', added);
              
        }
  
           //Función para boton modo oscuro/claro
    function changeButtonLightMode(button, darkMode) {
        let body = document.body

        if(darkMode){
            button.innerHTML = "Modo Oscuro"
            button.classList.replace('btn-light', 'btn-dark');
            body.style.backgroundColor = '#FFFFFF'
        }else{
            button.innerHTML = "Modo claro"
            button.classList.replace('btn-dark', 'btn-light');
            body.style.backgroundColor = '#000000 '
        }       
        
    }


