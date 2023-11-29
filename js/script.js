


document.querySelector('#app').innerHTML = `
<div class="container" id="container">
<section class="card mb-11 mx-auto cards" style="max-width: 800px;">
  <div class="row ">
    <div class="col-md-4 ">
      <img src="https://res.cloudinary.com/dzb6jy2uq/image/upload/v1701202202/1_vcqitj.webp" class="img-fluid  ">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Laptop Lenovo Ideapad 3 AMD Ryzen 5-5500U 8GB RAM + 512GB SSD</h5><br>
        Crea una lista 
        <ul>
          <li>Procesador: AMD Ryzen 5-5500U</li>
          <li>Memoria de almacenamiento: 512GB SSD</li>
          <li>Memoria RAM: 8GB</li>
          <li>Tipo de Disco: SSD</li>
          <li>Tamaño de pantalla: 15.6" Pulgadas</li>
        </ul>
        <h5 class="precio">$529.00</h5>
        <div class="text-center"> <!-- Centra el boton -->
        <button type="button" class="btn btn-outline-success" id="soldBtn"  onclick="changeButton()" >Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>



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
        <button type="button" class="btn btn-outline-success"  id="soldBtn" onclick="changeButton()">Añadir al carrito</button>
        <div class="text-center">
      </div>
    </div>
  </div>
</section>


`



document.addEventListener("DOMContentLoaded", () => {
   /* Con querySelectorAll Se seleccionan todos los botones que contienen la clase soldBtn  */
    let soldButton = document.querySelectorAll("#soldBtn");
  
    // Agrega un evento de clic al botón
    /* Todos los botones muestran la misma alerta */
    soldButton.forEach((button) => {
        button.addEventListener("click", () => {
              // Muestra una alerta al hacer clic en el botón
              Swal.fire({
     
                text: "Se ha añadido un nuevo producto a tu carrito.",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTp7S4vNNnfo-V1vZFwbBB2H0EtX0aPcDxjs60XhmQf8veX1yCjoRpRaspEZZGG70WhM&usqp=CAU",
                imageWidth: 200,
                imageHeight: 150,
                confirmButtonText: "Cerrar", 
               })

               changeButton(button);
            })
     
        });

        function changeButton(button) {
           
            button.innerHTML = 'Añadido al carrito'; // Cambiar el texto del botón
            button.classList.remove('btn-outline-success');//Remover la clase (color del botón)
            button.classList.add('btn-danger'); //Añadir nuevo color al hacer clic sobre el botón
        }
        
    
    });
      
  
  