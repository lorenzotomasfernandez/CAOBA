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

//Boton reestablecer datos
function reiniciar() {
  document.getElementById("formularioContactanos").reset();
}

//Enviar datos
let modal1 = document.getElementById("enviarDatos");
let abrirModal1 = document.getElementById("enviar");
let cerrarCruz1 = document.getElementById("cerrar");
let cerrarModal1 = document.getElementById("cerrar1");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("mail");
let consulta = document.getElementById("consulta");

let nombreValue = "";
let apellidoValue = "";
let emailValue = "";
let consultaValue = "";

nombre.addEventListener("change", function(e){
  nombreValue = e.target.value;
});

apellido.addEventListener("change", function(e){
  apellidoValue = e.target.value;
});

email.addEventListener("change", function(e){
  emailValue = e.target.value;
});

consulta.addEventListener("change", function(e){
  consultaValue = e.target.value;
});

abrirModal1.onclick = function() {
  if (nombreValue != "" && apellidoValue != "" && emailValue.includes("@") && consultaValue != "") {
    modal1.style.display = "block";
  }
}

cerrarCruz1.onclick = function() {
    modal1.style.display = "none";
} 

cerrarModal1.onclick = function() {
    modal1.style.display = "none";
} 

window.onclick = function(event) {
    if (event.target == modal) {
      modal1.style.display = "none";
    }
  }


