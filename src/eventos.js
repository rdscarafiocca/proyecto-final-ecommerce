//Evento disparado al hacer click en el botón de agregar producto al carrito.
function eventoAgregar(event){
    const producto = listaProductos.find( producto => producto.id == event.target.id);
    if (producto !== undefined){
        cargarCarrito(producto);
    }
    else{
        console.error("No se encontraron coincidencias entre el Id del botón y el Id del producto");
    }
}

//Se produce cuando se hace click en el botón de eliminar de un producto en el carrito.
function eventoEliminar(event){
    const fila = document.getElementById(`c${event.target.id}`);
    const producto = carrito.buscarProdPorId(event.target.id);
    producto.devolverStock();
    carrito.eliminarProducto(producto);
    tablaCarrito.removeChild(fila);
    checkoutTotal.innerText = '$' + carrito.montoTotal();
}

//Al hacer click en vaciar en la tabla del carrito.
function eventoVaciarCarrito(){
    if (carrito.cantidadDeProductos() == 0)
    {
        alert("El carrito está vacío.");
        return;
    }

    if (confirm('Está seguro de que desea vaciar el carrito?'))
    {
        carrito.vaciar();
        tablaCarrito.innerHTML = '';
        checkoutTotal.innerText = '';
    }
}

/*  Si se hace click sobre el nombre del producto, se muestra un cuadro de diálogo donde se muestra la imagen,
    nombre y descripción del producto. 
*/
function eventoMostrarImagen(event){
    const producto = listaProductos.find (producto => producto.id == event.target.id);
    if (producto === undefined)
        return;
    
    Swal.fire({
        title: producto.nombre,
        text: producto.descripcion,
        imageUrl: producto.img,
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: producto.nombre,
    });
}

/*Se dispara al hacer click en el botón 'Comprar'. A modo ilustrativo, solamente muestra el mensaje de éxito de la compra
  (si hay al menos un producto en el carrito).
*/
function eventoComprar(){
    if (carrito.cantidadDeProductos() > 0){
        Swal.fire(
            'Éxito',
            'La compra se efectuó correctamente',
            'success'
        );
    }
    else {
        Swal.fire(
            'El carrito está vacío',
            'Debe ingresar al menos un producto al carrito',
            'info'
        );
    }
}