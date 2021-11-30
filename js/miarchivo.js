// Desafio "Crear un algoritmo JS simple"

alert ( "¡Hola! Antes de avanzar necesitas completar ciertos datos" ) ;

const  nombreYApellido  =  prompt ( "Ingrese su nombre y apellido" ) ;
let  edad  =  prompt ( "Ingrese su edad" ) ;
const  documento  =  prompt ( "Ingrese su numero de documento" ) 

alert ( "Necesitamos verificar que es un humano. Por favor realizar los siguientes calculos." )

let  numero  =  prompt ( "Ingresar un numero: " ) ;
    numero2  =  prompt ( "Ingresar otro numero: " ) ;
let  verificacionHumano  =  prompt ( "La suma de " +  numero  +  " y " +  numero2  +  " es: " ) ;

// Desafio "Crear algoritmo con un condicional"

let  numero3  =  parseFloat ( prompt ( "Ingrese otro numero" )) ;
if ( numero3 > 10  &&  numero3 < 50 ) {
    alert ( "El numero esta entre 10 y 50" )
}

// Desafio "Crear un algoritmo utilizando un ciclo"

let  numero4  =  parseInt ( prompt ( "Ingresar un numero entero:" ) ) ;
for (let i=0; i<numero4;i ++)  {
    alert ("Hola") ;
}

// Desafio "Simulador interactivo"

function  producto (precio)  {

    let descuento  =  0.50 ;
    
    let  precioDelProducto  =  parseFloat( precio*descuento) ;
  
    return  precioDelProducto ;

}

let resultado  =  producto ("400");
alert(resultado)

// Desafio complementario "Funciones relacionadas"

let  precio  =  parseInt ( prompt ( "Ingrese el precio del producto:" ) )
let  impuesto  =  0.21 ;

function  precioDelProducto (precio)  {
    if  ( precio  !=  0  &&  precio  !=  "" )  {
        alert ( "El precio ingresado es: "  +  precio ) ;
    }
}

function  sumarImpuesto ( precio )  {
    alert ( "Debemos sumarle el 21% de impuestos" )
    let  precioConImpuesto  =  parseFloat(precio*impuesto);
    let precioFinalConImpuesto = precio + precioConImpuesto;
    return  precioFinalConImpuesto;
}

function  precioFinal1 (valorFinal)  {
    alert ( "El precio final es: "  +  valorFinal ) ;
}

precioDelProducto (precio) ;
let  precioFinalConImpuesto  =  sumarImpuesto(precio) ;
precioFinal1(precioFinalConImpuesto);

// Desafio Incorporar objetos

class  Producto{

    constructor ( marca ,  precio2 )  {
        this.marca  =  prompt ( "Ingresar el nombre del producto: " ) ;
        this.precio2  =  parseFloat(prompt("Ingrese el precio del producto: "));
    }
    impuesto(){
        return this.precio2*0.21;
    }
    precioFinal(){
        return this.precio2+this.impuesto()
    }
    mostrar(){
        alert( "Este es el producto de " + this.marca + " con el precio de: $" + this.precioFinal() ) ;
    }
}

const  producto1  =  new  Producto();
producto1.mostrar();

// Desafio "Incorporar arrays"

let  nombreDelProductoALlevar  =  prompt ( "Ingrese el nombre del producto a llevar:" )
const  productoALlevar  =  [nombreDelProductoALlevar] ;
alert ( "Va a llevar "  +  productoALlevar.length +  " producto "  ) ; 

// Desafio complementario "Ordenar un array de objetos"

let producto2 = new Producto();
let producto3 = new Producto();
let producto4 = new Producto();

let precioOriginalP1 = producto2.precio2;
let precioOriginalP2 = producto3.precio2;
let precioOriginalP3 = producto4.precio2;

const preciosDeTodosLosProductos = [precioOriginalP1,precioOriginalP2,precioOriginalP3];
const preciosFinales = preciosDeTodosLosProductos.sort(ordenar);
function ordenar(a, b){
    return a-b
}

alert(preciosFinales);

//Desafio: "Interactuar con HTML"

let borrarElemento = document.getElementById("Borrar");
borrarElemento.parentNode.removeChild(borrarElemento);

//Modal

$(document).ready(function () {
    $('.toast').toast('show');
});

//Desafio "Incorporar elementos"

function validarCorreo(correo) {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(correo);
    if (esValido==true) {
        alert("¡Vas a recibir mas novedades via mail")
    } else {
        alert("Por favor, ingrese un correo electronico valido.")
    }
}