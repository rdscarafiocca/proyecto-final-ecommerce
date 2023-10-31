//Clase encargada de administrar el carrito (principalmente agrega, elimina, calcula el monto total y la cantidad de los productos)

class Carrito{
    listaCarrito = [];

    //Devuelve true si se pudo agregar el producto al carrito.
    agregarProducto(producto){
        if (producto instanceof Producto){
            if (producto.hayStock()){
                this.listaCarrito.push(producto);
                producto.descontarStock();
                return true;
            }
            else{
                alert("No hay suficiente stock del producto");
                return false;
            }
        }
        else{
            console.error("El elemento a agregar no es un producto válido.");
            return false;
        }
    }
    buscarProdPorId(id){
        let resultado = this.listaCarrito.find( producto => producto.id == id);
        return resultado;
    }
    buscarProdPorNombre(nombre){
        let resultado = this.listaCarrito.find( producto => producto.nombre == nombre);
        return resultado;
    }

    //Si encuentra el producto y lo elimina, devuelve true (operación satisfactoria). Caso contrario, devuelve false.
    eliminarProducto(productoParam){
        let indiceProducto = this.listaCarrito.findIndex(producto => producto.id == productoParam.id);
        
        if (indiceProducto !== -1){
            this.listaCarrito.splice(indiceProducto, 1);
            return true;
        }
        return false;
    }

    cantidadDeProductos(){
        return this.listaCarrito.length;
    }

    //Devuelve la suma de todos los precios de los productos que están dentro del carrito
    montoTotal(){
        let total = 0;

        for (const producto of this.listaCarrito){
            total += producto.precio;
        }
        return total;
    }

    vaciar(){
        //Antes de eliminar el contenido del carrito, repone el stock.
        for (const producto of this.listaCarrito){
            producto.devolverStock();
        }
        this.listaCarrito = [];
    }
}
