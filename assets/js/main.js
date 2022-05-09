class Producto {
    constructor(id, nombre, tipo, precio) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}

let listaDeDatos = [];
const boton = document.getElementById("botonGuardar");

boton.addEventListener("click", () => {
    const dato1 = document.getElementById("dato1").value; // ID
    const dato2 = document.getElementById("dato2").value; // NOMBRE
    const dato3 = document.getElementById("dato3").value; // PRECIO
    listaDeDatos.push(new Producto(dato1, dato2, dato3));
    console.log(listaDeDatos);
    agregarProductos();
});

function agregarProductos() {
    const contenedorProductos = document.getElementById("productos");
    contenedorProductos.innerHTML = "";
    for (const productos of listaDeDatos) {
        contenedorProductos.innerHTML += `<div class="product mx-5 my-3" id="${productos.id}">
                                            <p>ID: ${productos.id}</p>
                                            <p>NOMBRE: ${productos.nombre}</p>
                                            <p>PRECIO: ${productos.precio}</p>
                                          </div>`
    }
};