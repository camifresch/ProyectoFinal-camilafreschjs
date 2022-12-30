// VARIABLES
let nombreForm = document.querySelector("#nombreyapellido");
let dateForm = document.querySelector("#date");

//Eventos
nombreForm.addEventListener ("input", function () {
  console.log(nombreForm.value);
  if (nombreForm.value === "") {
    alert("Ingrese un nombre y apellido válido");
  }
  else {
    alert("correcto!")
  }
});

dateForm.addEventListener("input", function () {
  console.log(dateForm.value);
  if (dateForm.value === "") {
    alert("Ingrese una fecha válida");
  }
  else {
    alert("correcto!")
  }
});

let formulario = document.querySelector("#formulario");

let info = document.querySelector(".info");

const mostrarInfo = formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  info.innerHTML = `
  <div class="alert alert-warning" role="alert">
<h5> Muchas gracias ${nombreForm.value} te esperamos el ${dateForm.value} para realizar el servicio a eleccion.</h5></div>`;
});
