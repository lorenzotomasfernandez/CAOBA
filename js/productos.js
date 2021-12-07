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
const product = document.getElementById("product");
let listProduct = ''
let itemCart = ''
const botonComprar = document.getElementById("botonComprar");
const linkComprar = document.getElementById("linkComprar");
let carrito = [];

botonComprar.addEventListener("click", function () {
  linkComprar.removeAttribute("href");

  console.log(carrito, carrito.length);
  if (carrito && carrito.length) {
    linkComprar.setAttribute("href", "./carrito.html");
  } else {
    linkComprar.removeAttribute("href");
  }
})


function agregarAlCarrito(productoId) {
  const cart = productosData.filter( function (product) {
   return product.id === productoId;
  })
  carrito.push(cart)
  localStorage.setItem("PRODUCT", JSON.stringify(carrito))
}

function mostrarCarrito() {
  const cart = JSON.parse(localStorage.getItem("PRODUCT"))
  let renderCart = ''
  cart?.map( function (products) {
    return products.map(
      function (product) {
        return renderCart += `
        <div>
          <h4>${product.title}</h4>
          <p>$${product.price}</p>
        </div>`
      }
    )
  })
  document.getElementById('listado-carrito').innerHTML = renderCart;
}

function borrarCarrito() {
  localStorage.removeItem("PRODUCT")
  document.getElementById('listado-carrito').innerHTML = '';
}

productosData.map(product => {
  listProduct += 
  `<div class="card img-producto col-md-3" style="width: 18rem;">
    <img src=../imagenes/${product.imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p>$${product.price}</p>
        <button onclick="agregarAlCarrito(${product?.id})" id="btn-add-cart" class="btn btn-primary">AÑADIR AL CARRITO</button>
    </div>
  </div>`
})

product.innerHTML = listProduct;



