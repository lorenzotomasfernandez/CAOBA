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


//Carrito

let modalComprar = document.getElementById("modalComprar");
let abrirComprar = document.getElementById("botonComprar");
let cerrarCruzComprar = document.getElementById("botonCruzComprar");
let cerrarComprar = document.getElementById("botonCerrarComprar");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let direccion = document.getElementById("direccion");
let nombreTarjeta = document.getElementById("nombreTarjeta");
let numeroTarjeta = document.getElementById("numeroTarjeta");
let vencimiento = document.getElementById("vencimiento");
let cvv = document.getElementById("cvv");

let nombreValue = "";
let apellidoValue = "";
let emailValue = "";
let direccionValue = "";
let nombreTarjetaValue = "";
let numeroTarjetaValue = "";
let vencimientoValue = "";
let cvvValue = "";

nombre.addEventListener("change", function(e){
  nombreValue = e.target.value;
});

apellido.addEventListener("change", function(e){
  apellidoValue = e.target.value;
});

email.addEventListener("change", function(e){
  emailValue = e.target.value;
});

direccion.addEventListener("change", function(e){
  direccionValue = e.target.value;
});

numeroTarjeta.addEventListener("change", function(e){
  numeroTarjetaValue = Number(e.target.value);
});

nombreTarjeta.addEventListener("change", function(e){
  nombreTarjetaValue = e.target.value;
});

vencimiento.addEventListener("change", function(e){
  vencimientoValue = e.target.value;
  console.log(e.targer.value)
});

cvv.addEventListener("change", function(e){
  cvvValue = Number(e.target.value);
})

abrirComprar.onclick = function() {
  if (nombreValue && apellidoValue && emailValue.includes("@") && direccionValue && nombreTarjetaValue &&
  numeroTarjetaValue && numeroTarjetaValue && vencimientoValue && cvvValue) { 
   modalComprar.style.display = "block";
  }
}

modalComprar.onclick = function() {
    modalComprar.style.display = "none";
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

//Animacion
$(document).ready(function(){
  $("#ver_ocultar").click(function(){
     if($(this).hasClass('visualizar')){
        $(this).removeClass('visualizar');
        $(this).html('Ocultar pie de pagina');
        $("#footer").fadeIn(500);
     }else{
        $(this).addClass('visualizar');
        $(this).html('Ver pie de pagina');
        $("#footer").fadeOut(500);
     }
  });
});
