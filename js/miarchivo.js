// Desafio "Crear un algoritmo JS simple"

alert("¡Hola! Antes de avanzar necesitas completar ciertos datos");

// Una alerta en la cual aclara que se necesitan completar ciertos datos para poder seguir en la pagina web

const nombreYApellido = prompt("Ingrese su nombre y apellido");
let edad = prompt("Ingrese su edad");
const documento = prompt("Ingrese su numero de documento");
// Datos del usuario

alert("Necesitamos verificar que es un humano. Por favor realice los siguientes calculos.")
// Una alerta para corroborar que la persona que visita la pagina es un ser humano

let numero = prompt("Ingresar un numero");
    numero2 = prompt("Ingresar otro numero");
// Ingresar dos numeros cualquiera para  poder realizar una suma

let verificacionHumano = prompt("La suma de "+ numero + " y "+ numero2 + " es: ");
// Se realiza una suma de los numeros elegidos anteriormente


// Desafio "Crear algoritmo con un condicional"

let numero3 = parseFloat(prompt("Ingrese otro numero"));
//Se pide ingresar cualquier numero

if(numero3>10 && numero3<50){
    alert("El numero esta entre 10 y 50")
}
// En caso de que el numero este entre 10 y 50 se mostrara una alerta

// Desafio "Crear un algoritmo utilizando un ciclo"

let numero4 = parseInt(prompt("Ingresar un numero entero: "));
// Se crea una variable en el cual el usuario debe ingresar un numero entero 
for (let i = 0; i < numero4 ; i++) {
    alert("Hola");
}

//Desafio "Simulador interactivo"

function producto(precio) {

    let descuento = 0.50;
    
    let precioDelProducto = parseFloat(precio * descuento);
  
    return precioDelProducto;

}

let resultado = producto("400");
// 400 seria el parametro precio

alert(resultado)
// Desafio complementario "Funciones relacionadas"

let precio = parseInt(prompt("Ingrese el precio del producto: "))
let impuesto = 0.21;

function precioDelProducto(precio) {
    if (precio != 0 && precio != "") {
        alert("El precio ingresado es: " + precio);
    }
}

function sumarImpuesto(precio) {
    alert("Debemos sumarle el 21% de impuestos")
    let precioConImpuesto = parseFloat(precio * impuesto);
    return precioConImpuesto;
}

function precioFinal(valorFinal) {
    alert("El precio final es: " + valorFinal);
}

precioDelProducto(precio);
let precioConImpuesto = sumarImpuesto(precio);
precioFinal(precioConImpuesto);




















