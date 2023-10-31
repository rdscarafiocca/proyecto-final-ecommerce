//Es el producto en sí. Contiene la información del producto, como también métodos de control de stock.

class Producto{
    constructor (id, nombre, descripcion, precio, stock, img=''){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }

    hayStock(){
        if (this.stock > 0)
            return true;
        else
            return false;
    }
    descontarStock(){
        if (this.hayStock())
            this.stock--;
    }
    reponerStock(cantidad){
        if (cantidad > 0)
            this.stock = cantidad;
        else
            console.error("Las cantidades deben ser mayores a cero.");
    }
    //Devuelve la unidad del producto que se agregó al carrito cuando el usuario lo eliminó del mismo.
    devolverStock(){
        this.stock++;
    }
    //Devuelve todos los parámetros del producto en formato string
    obtenerInfo(){
        return `Id: ${this.id}\nNombre: ${this.nombre}\nDescripcion: ${this.descripcion}\nPrecio: ${this.precio}\nStock: ${this.stock}\n`;
    }
}