//Borrar elemento

let borrarElemento = document.getElementById("Borrar");
borrarElemento.parentNode.removeChild(borrarElemento);

//Modal

$(document).ready(function () {
    $('.toast').toast('show');
});

//Suscripcion a newsletter
let modal = document.getElementById("modalSuscribete");
let abrirModal = document.getElementById("botonSuscribete");
let cerrarCruz = document.getElementById("botonCruz");
let cerrarModal = document.getElementById("botonCerrar");
let inputEmail = document.getElementById("inputMail");
let inputValue = "";

inputEmail.addEventListener("change", validacionEmail)

abrirModal.onclick = function() {
    if (inputValue.includes("@" && ".com")) {
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
