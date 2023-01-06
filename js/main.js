// VARIABLES
let nombreForm = document.querySelector("#nombreyapellido");
let dateForm = document.querySelector("#date");

//Eventos
nombreForm.addEventListener("input", function () {
  console.log(nombreForm.value);
  if (nombreForm.value === "") {
    alert("Ingrese un nombre y apellido válido");
  }
});

dateForm.addEventListener("input", function () {
  console.log(dateForm.value);
  if (dateForm.value === "") {
    alert("Ingrese una fecha válida");
  }
});

let formulario = document.querySelector(".formulario");

let info = document.querySelector(".info");

const mostrarInfo = formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  info.innerHTML = `
  <div class="alert alert-warning" role="alert">
<h5> Muchas gracias ${nombreForm.value} te esperamos el ${dateForm.value} para realizar el servicio a eleccion.</h5></div>`;
});



// carrito

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    leerDatosServicios(e.target.parentElement);
  });
});


let articulosCarrito = [];

function leerDatosServicios(servicios) {
  const infoServicios = {
    titulo: servicios.querySelector(".card-title").textContent,
    texto: servicios.querySelector(".card-text").textContent,
    id: servicios.querySelector(".btn").getAttribute("data-id"),
  };

  //Agregar al carrito
  articulosCarrito = [...articulosCarrito, infoServicios];
  console.log(articulosCarrito);

  carritoHTML();
}

//Mostrar los servicios en el carrito
const carrito = document.querySelector("#carrito");

function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach((servicios) => {
    const row = document.createElement("p");
    row.innerHTML = `
    <div class="container">
    <h5>${servicios.titulo}</h5>
    <p>${servicios.texto}</p>
    <button class="btn btn-danger" id="${servicios.id}">Eliminar</button>
    </div>
    `;
    carrito.appendChild(row);
  });
}

function limpiarHTML() {
  carrito.innerHTML = "";
}

carrito.addEventListener("click", eliminarServicios);

// eliminar servicios

function eliminarServicios(e) {
  if (e.target.classList.contains("btn-danger")) {
    let serviciosID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter(
      (servicios) => servicios.id !== serviciosID
    );
    carritoHTML();
  }
}