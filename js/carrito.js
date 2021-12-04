//Suscripcion a newsletter
let modal = document.getElementById("modalSuscribete");
let abrirModal = document.getElementById("botonSuscribete");
let cerrarCruz = document.getElementById("botonCruz");
let cerrarModal = document.getElementById("botonCerrar");
let inputEmail = document.getElementById("inputMail");
let inputValue = "";

inputEmail.addEventListener("change", validacionEmail)

abrirModal.onclick = function() {
    if (inputValue.includes("@")) {
      modal.style.display = "block";
    }
  }

cerrarCruz.onclick = function() {
    modal.style.display = "none";
} 

cerrarModal.onclick = function() {
    modal.style.display = "none";
} 

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function validacionEmail(e) {
  inputValue = e.target.value;
}

//Carrito

let modalComprar = document.getElementById("modalComprar");
let abrirComprar = document.getElementById("botonComprar");
let cerrarCruzComprar = document.getElementById("botonCruzComprar");
let cerrarComprar = document.getElementById("botonCerrarComprar");

modalComprar.onclick = function() {
    modalComprar.style.display = "block";
  }

cerrarCruzComprar.onclick = function() {
    modalComprar.style.display = "none";
} 

cerrarComprar.onclick = function() {
    modalComprar.style.display = "none";
} 

window.onclick = function(event) {
    if (event.target == modal) {
      modalComprar.style.display = "none";
    }
  }