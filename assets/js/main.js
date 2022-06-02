// Variables y constantes 

const botonRemeras = document.getElementById("filtroRemeras");
const botonPantalones = document.getElementById("filtroPantalones");
const botonTodos = document.getElementById("filtroTodos");
const botonCamperas = document.getElementById("filtroCamperas");
const botonCamisas = document.getElementById("filtroCamisas");
const botonBuzos = document.getElementById("filtroBuzos");
let carta = "";


// Funcion que me arma el cuerpo de la carta de productos

function cartaProducto({ image, title, description, price, id}) {
    carta = `<div class="card my-3 mx-2" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <p>$ ${price}</p>
                    <a href="#" class="btn btn-dark buttonCompra" id="${id}">Agregar a carrito</a>
                </div>
            </div>`

    return (carta);
}
    

// Utilizo el fetch para llamar el json de productos y los agrego a todos en el HTML con DOM.

function listaDeProductos() {
    fetch("./assets/js/products.json")
        .then((resp) => resp.json())
        .then((data) => {
            let productosTienda = document.getElementById("productos");
            productosTienda.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                productosTienda.innerHTML += cartaProducto(data[i]);
            };
            let addCarrito = document.querySelectorAll(".buttonCompra");
            addCarrito.forEach((alertaCarrito) => {
                alertaCarrito.addEventListener("click", SweetAlert)
            })
        })
};

listaDeProductos();

// Libreria sweetalert al clickear Agregar al carrito

function SweetAlert() {
    Swal.fire({
        icon: 'success',
        title: 'Su producto fue agregado al carrito',
        showConfirmButton: false,
        timer: 1400
      }); 
}


// Filtro de productos

/*
const test = listaDeProductos();

const listaDeRemeras = test.filter( (la) => la.category.includes("Remera")); // Me filtra la lista de Remeras
console.log(listaDeRemeras);
*/

/*
const listaDePantalones = listaDeProductos.filter( (el) => el.tipo.includes("Pantalon")); // Me Filtra la lista de Pantalones
//console.log(listaDePantalones);
*/


// Botones de Filtrado

// Boton Todos
/*
let botonTodos = document.getElementById("filtroTodos");

botonTodos.addEventListener("click", () => {
    productosTienda(listaDeProductos);
});
*/
/*
// Boton Remeras
let botonRemeras = document.getElementById("filtroRemeras");

botonRemeras.addEventListener("click", () => {
    listaDeRemeras;
})
*/
/*
// Boton Pantalones
let botonPantalones = document.getElementById("filtroPantalones");

botonPantalones.addEventListener ("click", () => {
    productosTienda(listaDePantalones);
});
*/
// Libreria sweetAlert
/*
let carrito = document.querySelector(".buttonCompra");

carrito.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Su producto fue agregado al carrito',
        showConfirmButton: false,
        timer: 1400
      });
});
*/

// Agregar al localStorage 
/*
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

for (const producto of listaDeProductos()) {
    guardarLocal( producto.id , JSON.stringify(producto));
};
*/