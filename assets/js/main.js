
// El registro de Remeras y pantalones

class Producto {
    constructor(id, nombre, tipo, descripcion, foto,  precio) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.foto = foto;
        this.precio = precio;
    }
};


// Variable con rutas

/*
const rutaFotosRemera = /assets/image/remera/;
const rutaFotosPantalon = /assets/image/pantalones/;
*/


// Lista de todos los productos

let listaDeProductos = [
    new Producto(1, "Lacoste", "Remera", "Remera Celeste Lacoste Roules", "./assets/image/remeras/remera1.webp", 6.499),
    new Producto(2, "Levi's", "Remera", "Remera Blanca Levi's Misssion Tee", "./assets/image/remeras/remera2.webp", 4.499),
    new Producto(3, "Reef", "Pantalon", "Pantalon Negro Reef Dunes", "./assets/image/pantalones/pantalon1.webp", 12.599)
];

// Filtro de productos

const listaDeRemeras = listaDeProductos.filter( (el) => el.tipo.includes("Remera")); // Me filtra la lista de Remeras
//console.log(listaDeRemeras);
const listaDePantalones = listaDeProductos.filter( (el) => el.tipo.includes("Pantalon")); // Me Filtra la lista de Pantalones
//console.log(listaDePantalones);


// Filtrado y lista de Precios


function precioMenor () {
    return listaDeProductos.sort( (a, b) => a.precio - b.precio);
}

function precioMayor() {
    return listaDeProductos.sort( (a, b) => b.precio - a.precio)
}


// Funcion para que muestre todos los productos de la tienda

let carta = "";

function cartaProducto({foto, nombre, descripcion, precio}){
    carta = `<div class="card my-3 mx-2" style="width: 18rem;">
                <img src="${foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <p>$ ${precio}</p>
                    <a href="#" class="btn btn-primary">Agregar a carrito</a>
                </div>
            </div>`
            
    return(carta);

}


function productosTienda (listaDeProductos) {
    let productosTienda = document.getElementById("productos");
    productosTienda.innerHTML = "";

    for (let i = 0; i < listaDeProductos.length; i++) {
        productosTienda.innerHTML += cartaProducto(listaDeProductos[i]);
    };
}

window.onload = productosTienda(listaDeProductos);


// Botones de Filtrado

// Boton Todos
let botonTodos = document.getElementById("filtroTodos");

botonTodos.addEventListener("click", () => {
    productosTienda(listaDeProductos);
});

// Boton Remeras
let botonRemeras = document.getElementById("filtroRemeras");

botonRemeras.addEventListener("click", () => {
    productosTienda(listaDeRemeras);
})

// Boton Pantalones
let botonPantalones = document.getElementById("filtroPantalones");

botonPantalones.addEventListener ("click", () => {
    productosTienda(listaDePantalones);
});

// Boton precio Mayor

let botonPrecioMayor = document.getElementById("filtroMayorPrecio");

botonPrecioMayor.addEventListener("click", () => {
    productosTienda(precioMayor());
})

// Boton precio Menor

let botonPrecioMenor = document.getElementById("filtroMenorPrecio");

botonPrecioMenor.addEventListener("click", () => {
    productosTienda(precioMenor());
})

// Agregar al localStorage 

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

for (const producto of listaDeProductos) {
    guardarLocal( producto.id , JSON.stringify(producto));
};

