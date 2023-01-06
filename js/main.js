// VARIABLES
let nombreForm = document.querySelector("#nombreyapellido");
let dateForm = document.querySelector("#date");

//Eventos
nombreForm.addEventListener("input", function () {

  if (nombreForm.value === "") {
    alert("Ingrese un nombre y apellido válido");
  }
});

dateForm.addEventListener("input", function () {

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

// a json
// Array de servicios
const servicios = [
  {
      nombre: "Lifting de pestañas",
      precio: 2800,
      zona: "pestañas",
      id: 1,
  },

  {
      nombre: "Extensiones de pestañas",
      precio: 3000,
      zona: "pestañas",
      id: 2,
  },

  {
      nombre: "Laminado de cejas",
      precio: 2800,
      zona: "cejas",
      id: 3,
  },

  {
      nombre: "Perfilado de cejas",
      precio: 1500,
      zona: "cejas",
      id: 4,
  },
];

  const serviciosJson = JSON.stringify(servicios)
  localStorage.setItem("servicios", JSON.stringify(servicios));

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