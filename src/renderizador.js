//Script encargado de colocar dinámicamente los productos y los pedidos del cliente en sus respectivas tablas.

const tablaProcesadores = document.getElementById('contenido-tabla-procesadores');
const tablaMother = document.getElementById('contenido-tabla-mother');
const tablaRam = document.getElementById('contenido-tabla-ram');
const tablaVideo = document.getElementById('contenido-tabla-video');
const tablaAlmacenamiento = document.getElementById('contenido-tabla-almacenamiento');
const tablaFuente = document.getElementById('contenido-tabla-fuente');
const tablaPeriferico = document.getElementById('contenido-tabla-periferico');

const tablaCarrito = document.getElementById('contenido-tabla-carrito');
const checkoutTotal = document.getElementById('checkout-total');

/*  Carga los productos disponibles para la venta en la tabla de productos a la venta(si el stock es mayor a cero)
    El tipo de producto es parte de la descripcion:

    Ejemplo: si la descripción contiene la palabra 'procesador' -> carga los procesadores
    Palabras claves: 'motherboard', 'memoria ram', 'placa de video', 'almacenamiento', 'fuente', 'mouse', 'teclado'  
*/
function cargarProductos(tabla, tipoProducto){
    for (const producto of listaProductos){
        if (producto.descripcion.toLowerCase().includes(tipoProducto) && producto.stock > 0){
            tabla.innerHTML += `
                <td>${producto.id}</td>
                <td id=${producto.id} onclick="eventoMostrarImagen(event)" class="cursor-imagen">${producto.nombre}</td>
                <td class="oculta-en-moviles">${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td><button id=${producto.id} class="btn btn-primary" onclick="eventoAgregar(event)">Agregar</button></td>
            `;
        }
    }    
}

/*
    Carga el producto ingresado en la tabla del carrito.
    Para diferenciar las ids de la tabla de productos de las de los elementos del carrito,
    se agregó el prefico 'c'. Entonces, el producto con id=5, en la tabla del carrito aparece
    como id=c5.
*/
function cargarCarrito(producto){
    //El stock del producto se descuenta automáticamente al agregarlo al carrito.
    if (carrito.agregarProducto(producto)){ 
        console.log(`Stock de ${producto.nombre}: ${producto.stock}\n`);
        tablaCarrito.innerHTML += `
        <tr id=c${producto.id}>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td class="oculta-en-moviles">${producto.descripcion}</td>
        <td>${producto.precio}</td>
        <td><button id=${producto.id} class="btn btn-danger" onclick="eventoEliminar(event)">Eliminar</button></td>
        </tr>
        `;
        checkoutTotal.innerText = '$' + carrito.montoTotal();
    }
}

cargarProductos(tablaProcesadores, 'procesador');
cargarProductos(tablaMother, 'motherboard');
cargarProductos(tablaRam, 'memoria ram');
cargarProductos(tablaVideo, 'placa de video');
cargarProductos(tablaAlmacenamiento, 'almacenamiento');
cargarProductos(tablaFuente, 'fuente');
cargarProductos(tablaPeriferico, 'mouse');
cargarProductos(tablaPeriferico, 'teclado');

