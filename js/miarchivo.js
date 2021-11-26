// Desafio "Crear un algoritmo JS simple"

alert ( "¡Hola! Antes de avanzar necesitas completar ciertos datos" ) ;

// Un alert en la cual aclara que se necesitan completar ciertos datos para poder seguir en la pagina web

const  nombreYApellido  =  prompt ( "Ingrese su nombre y apellido" ) ;
let  edad  =  prompt ( "Ingrese su edad" ) ;
const  documento  =  prompt ( "Ingrese su numero de documento" ) ;
// Datos del usuario

alert ( "Necesitamos verificar que es un humano. Por favor realizar los siguientes calculos." )
// Un alert para corroborar que la persona que visita la pagina es un ser humano

let  numero  =  prompt ( "Ingresar un numero: " ) ;
    numero2  =  prompt ( "Ingresar otro numero: " ) ;
// Ingresar dos numeros cualquiera para poder realizar una suma

let  verificacionHumano  =  prompt ( "La suma de " +  numero  +  " y " +  numero2  +  " es: " ) ;
// Se realiza una suma de los numeros elegidos anteriormente


// Desafio "Crear algoritmo con un condicional"

let  numero3  =  parseFloat ( prompt ( "Ingrese otro numero" )) ;
// Se pide ingresar cualquier numero

if ( numero3 > 10  &&  numero3 < 50 ) {
    alert ( "El numero esta entre 10 y 50" )
}
// En caso de que el numero este entre 10 y 50 se mostrara una alert

// Desafio "Crear un algoritmo utilizando un ciclo"

let  numero4  =  parseInt ( prompt ( "Ingresar un numero entero:" ) ) ;
// Se crea una variable en el cual el usuario debe ingresar un numero entero 
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
// 400 seria el parametro precio

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

    constructor ( marca ,  precio )  {
        this.marca  =  prompt ( "Ingresar el nombre del producto: " ) ;
        this.precio  =  parseFloat(prompt("Ingrese el precio del producto: "));
    }
    impuesto(){
        return this.precio*0.21;
    }
    precioFinal(){
        return this.precio+this.impuesto()
    }
    mostrar(){
        alert( "Este es el producto de " + this.marca + " con el precio de: $" + this.precioFinal() ) ;
    }
}

const  producto1  =  new  Producto();
producto1.mostrar();

// Desafio "Incorporar arrays"

// Se va a indicar cuantos productos lleva

let  nombreDelProductoALlevar  =  prompt ( "Ingrese el nombre del producto a llevar:" )
const  productoALlevar  =  [nombreDelProductoALlevar] ;
alert ( "Va a llevar "  +  productoALlevar.length +  " producto "  ) ; 

// Desafio complementario "Ordenar un array de objetos"

// El objetivo es ordenar los precios de menor a mayor

let producto2 = new Producto();
let producto3 = new Producto();
let producto4 = new Producto();

let precioOriginalP1 = producto2.precio;
let precioOriginalP2 = producto3.precio;
let precioOriginalP3 = producto4.precio;

const preciosDeTodosLosProductos = [precioOriginalP1,precioOriginalP2,precioOriginalP3];
const preciosFinales = preciosDeTodosLosProductos.sort(ordenar);
function ordenar(a, b){
    return a-b
}

alert(preciosFinales);

//Desafio: "Interactuar con HTML"

let borrarElemento = document.getElementById("Borrar");
borrarElemento.parentNode.removeChild(borrarElemento);

