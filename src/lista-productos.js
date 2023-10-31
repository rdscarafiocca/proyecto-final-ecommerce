//Este script se encarga de cargar los productos disponibles para la venta e inicializar el carrito de compras.

const listaProductos = [];

/*---------------------------------------- LISTA DE PRODUCTOS ----------------------------------------*/
listaProductos.push(new Producto(1, "Ryzen 3 3200G 4.0GHZ", "Procesador marca AMD ", 94000, 10, '../img/productos/procesadores/ryzen3.jpg'));
listaProductos.push(new Producto(2, "Ryzen 5 3600 4.2GHZ", "Procesador marca AMD", 135900, 5, '../img/productos/procesadores/ryzen5.jpg'));
listaProductos.push(new Producto(3, "Core I3 10105F 4.4GHZ", "Procesador marca Intel", 70000, 4, '../img/productos/procesadores/corei3.jpg'));
listaProductos.push(new Producto(4, "Core I5 10400F 4.3GHZ", "Procesador marca Intel", 166000, 1, '../img/productos/procesadores/corei5.jpg'));

listaProductos.push(new Producto(5, "MSI A520M-A AM4", "Motherboard para AMD", 77000, 28, '../img/productos/motherboards/msia520.jpg'));
listaProductos.push(new Producto(6, "ASUS PRIME A520M-K AM4", "Motherboard para AMD", 78000, 9, '../img/productos/motherboards/asusa520m.jpg'));
listaProductos.push(new Producto(7, "ASROCK Z390 PHANTOM GAMING", "Motherboard para Intel", 43000, 1, '../img/productos/motherboards/asrockz390.jpg'));
listaProductos.push(new Producto(8, "ASUS PRIME H510M-K SOCKET 1200", "Motherboard para Intel", 85000, 7, '../img/productos/motherboards/asush510m.jpg'));

listaProductos.push(new Producto(9, "ADATA DDR4 16GB 4133MHZ", "Memoria RAM DDR4", 72000, 50, '../img/productos/memorias-ram/adataddr416gb.jpg'));
listaProductos.push(new Producto(10, "CORSAIR DDR4 8GB 3000MHZ", "Memoria RAM DDR4", 28000, 9, '../img/productos/memorias-ram/corsair8gbddr.jpg'));
listaProductos.push(new Producto(11, "PATRIOT DDR4 8GB 3600MHZ", "Memoria RAM DDR4", 31200, 64, '../img/productos/memorias-ram/patriot8gbddr4.png'));
listaProductos.push(new Producto(12, "TEAM DDR4 8GB 3200MHZ", "Memoria RAM DDR4", 28000, 1, '../img/productos/memorias-ram/teamddr48gb.jpg'));

listaProductos.push(new Producto(13, "ASUS PHOENIX GEFORCE GTX1630 4GB", "Placa de video GeForce", 213000, 6, '../img/productos/placas-video/asusphoenixgtx1630.jpg'));
listaProductos.push(new Producto(14, "ASROCK RADEON RX550 2GB", "Placa de video Radeon", 97600, 1, '../img/productos/placas-video/asrockrx5502gb.jpg'));
listaProductos.push(new Producto(15, "MSI GEFORCE RTX3090 24GB", "Placa de video GeForce", 842000, 20, '../img/productos/placas-video/msirtx309024gb.jpg'));
listaProductos.push(new Producto(16, "ZOTAC GEFORCE RTX3070 8GB", "Placa de video GeForce", 552300, 14, '../img/productos/placas-video/zotacrtx30708gb.jpg'));

listaProductos.push(new Producto(17, "SSD M.2 ADATA NVME 1TB", "Almacenamiento disco sólido", 77000, 19, '../img/productos/almacenamiento/adatassdm21tb.jpg'));
listaProductos.push(new Producto(18, "SSD SATA TEAM 512GB", "Almacenamiento disco sólido", 24100, 36, '../img/productos/almacenamiento/teamsata512gb.jpg'));
listaProductos.push(new Producto(19, "SSD SATA WD GREEN 240GB", "Almacenamiento disco sólido", 18000, 17, '../img/productos/almacenamiento/ssdwdgreen240gb.jpg'));
listaProductos.push(new Producto(20, "SSD M.2 WD BLUE NVME 500GB", "Almacenamiento disco sólido", 6000, 4, '../img/productos/almacenamiento/ssdwdblue500gb.jpg'));

listaProductos.push(new Producto(21, "DEEPCOOL 700W DA700 80 PLUS BRONZE", "Fuente de alimentación", 64000, 10, '../img/productos/fuentes/deepcoolda700.jpg'));
listaProductos.push(new Producto(22, "GIGABYTE 450W 80 PLUS BRONZE", "Fuente de alimentación", 46000, 2, '../img/productos/fuentes/gigabyte450w80plus.jpg'));
listaProductos.push(new Producto(23, "CORSAIR 1200W HX1200 80 PLUS PLATINUM", "Fuente de alimentación", 142000, 23, '../img/productos/fuentes/corsair1200whx1200.jpg'));
listaProductos.push(new Producto(24, "THERMALTAKE 850W GF1 80 PLUS GOLD", "Fuente de alimentación", 100000, 11, '../img/productos/fuentes/thermaltake850wgf1.jpg'));

listaProductos.push(new Producto(25, "REDRAGON K568", "Teclado", 24000, 12, '../img/productos/perifericos/tecladoredragonk568.jpg'));
listaProductos.push(new Producto(26, "REDRAGON K552-KR", "Teclado", 25000, 29, '../img/productos/perifericos/tecladoredragonk552.jpg'));
listaProductos.push(new Producto(27, "LOGITECH M100", "Mouse color negro", 4500, 3, '../img/productos/perifericos/mouselogitechm100.jpg'));
listaProductos.push(new Producto(28, "LOGITECH G203", "Mouse color blanco", 22000, 18, '../img/productos/perifericos/mouselogitechg203.jpg'));
/*---------------------------------------------------------------------------------------------------*/

const carrito = new Carrito();