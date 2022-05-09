
// El registro de Remeras y pantalones

class Remera {
    constructor(id, nombre, descripcion, foto,  precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.foto = foto;
        this.precio = precio;
    }
};

class Pantalon {
    constructor(id, nombre, descripcion, foto, precio) {
        this.id = id;
        this.nombre = nombre;
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
    new Remera(1, "Lacoste", "Remera Celeste Lacoste Roules", "./assets/image/remeras/remera1.webp", 6.499),
    new Remera(2, "Levi's", "Remera Blanca Levi's Misssion Tee", "./assets/image/remeras/remera2.webp", 4.499),
    new Pantalon(3, "Reef", "Pantalon Negro Reef Dunes", "./assets/image/pantalones/pantalon1.webp", 12.599)
];


let listaDeRemeras = [
    new Remera(1, "Lacoste", "Remera Celeste Lacoste Roules", "./assets/image/remeras/remera1.webp", 6.499),
    new Remera(2, "Levi's", "Remera Blanca Levi's Misssion Tee", "./assets/image/remeras/remera2.webp", 4.499)
];


let listaDePantalones = [
    new Pantalon(3, "Reef", "Pantalon Negro Reef Dunes", "./assets/image/pantalones/pantalon1.webp", 12.599)
];


// Funcion para que muestre todos los productos de la tienda

let carta = "";

function cartaProducto(producto){
    carta = `<div class="card my-3 mx-2" style="width: 18rem;">
                <img src="${producto.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p>$ ${producto.precio}</p>
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
