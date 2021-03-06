// Variables y constantes 

const shoppingContainer = document.querySelector(".carritoContainer")
const comprarButton = document.querySelector(".comprarButton");
let carta = "";

// Funcion que me arma el cuerpo de la carta de productos

function cartaProducto({ image, title, description, price, id}) {
    carta = `<div class="card my-4 mx-2" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-price"#>$ ${price}</p>
                    <a href="#" class="btn btn-dark buttonCompra px-4" id="${id}">Agregar a carrito</a>
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
                alertaCarrito.addEventListener("click", AgregarCarrito);
                alertaCarrito.addEventListener("click", AgregarCartaAlCarrito);
            })

        })
};

listaDeProductos();

// Libreria SweetAlert para cuando clickeas Agregar al Carrito

function AgregarCarrito() {
    Swal.fire({
        icon: 'success',
        title: 'Su producto fue agregado al carrito',
        showConfirmButton: false,
        timer: 1400
      });
}

// Funciones para agregar las cartas al carrito

function AgregarCartaAlCarrito(event) {
    const button = event.target;
      const item = button.closest(".card");
      const itemTitle = item.querySelector(".card-title").textContent;
      const itemPrice = item.querySelector(".card-price").textContent;
      const itemImg = item.querySelector(".card-img-top").src;

      AgregarItemAlCarrito(itemTitle, itemPrice, itemImg);
}

function AgregarItemAlCarrito(itemTitle, itemPrice, itemImg) {

    // const para que no repita los items en el carrito sino que me sume la cantidad del mismo
    const titleItem = shoppingContainer.getElementsByClassName("shoppingCartItemTitle");
    for (let i = 0; i < titleItem.length; i++) {
        if (titleItem[i].innerText === itemTitle) {
            let elementQuantity = titleItem[i].parentElement.parentElement.parentElement.querySelector(
                ".shoppingCartItemQuantity"
            );
            elementQuantity.value++;
            return;
        }
    }

    // Cartas del carrito
    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = `
            <div class="row shoppingCartItem">
                <div class="col-6">
                    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                         <img src=${itemImg} class= "shopping-cart-image ms-4">
                        <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0 ms-4 h5">${itemTitle}</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                    </div>
                </div>
                <div class="col-4">
                    <div
                        class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                            value="1">
                        <button class="btn btn-danger buttonDelete me-5" type="button">X</button>
                    </div>
                </div>
            </div>
    `;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingContainer.append(shoppingCartRow);
    
    const removeItem =  shoppingCartRow.querySelector(".buttonDelete");
    removeItem.addEventListener("click", borrarCarrito);
    
    const agregarMasItems = shoppingCartRow.querySelector(".shoppingCartItemQuantity");
    agregarMasItems.addEventListener("change", agregarItemsEnCarrito);

    actualizarPrecioTotal();

}

// Actualir el precio del carrito

function actualizarPrecioTotal() {
    let total = 0;
    const precioTotal = document.querySelector(".shoppingCartTotal");
    const itemCarrito = document.querySelectorAll(".shoppingCartItem");

    itemCarrito.forEach((itemCarrito) => {
        const item = itemCarrito.querySelector(".shoppingCartItemPrice");
        const precioItem = Number(item.textContent.replace("$", " "));
        const cantidadItem = itemCarrito.querySelector(".shoppingCartItemQuantity")
        const cantidadItemValor = Number(cantidadItem.value); 
        total = total + precioItem * cantidadItemValor;
    })

    precioTotal.innerHTML = `
        $ ${total.toFixed(3)}
    `
}

// Borrar items del carrito 

function borrarCarrito(event) {
    const buttonClicked = event.target;
    buttonClicked.closest(".shoppingCartItem").remove();
    actualizarPrecioTotal();
}

// Agrega Items con el contador del carrito

function agregarItemsEnCarrito(event) {
    const input = event.target;
    input.value <= 0 ? input.value = 1 : null;
    actualizarPrecioTotal();
}

// Alerta de Comprar en el carrito y me borra todos los items

comprarButton.addEventListener("click", comprarButtonClicked);

function comprarButtonClicked() {
    shoppingContainer.innerHTML = "";
    actualizarPrecioTotal();
    Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra',
        showConfirmButton: false,
        timer: 1400
      });
}
