let prod1 = { id: 1, nombre: "1. Camiseta Boca 2025/26", precio: 60000, estampado: [5,6,10,11,7,20] }
let prod2 = { id: 2, nombre: "2. Camsiseta Boca 2024/25", precio: 50000, estampado: [6,7,8,9,10,11] }
let prod3 = { id: 3, nombre: "3. Camiseta Boca 2000 Quilmes", precio: 55000, estampado: [7,9,10] }
let prod4 = { id: 4, nombre: "4. Camiseta Boca 96/97 Parmalat", precio: 50000, estampado: [7,10] }

let productos = []
productos.push(prod1)
productos.push(prod2)
productos.push(prod3)
productos.push(prod4)

console.log(productos)

let carrito = []

console.log(carrito)

let seleccion = prompt("Bienvenidos al Almacen de Camisetas \nEscriba OK para continuar")

while(seleccion !== "OK") {
        seleccion = prompt("Bienvenidos al Almacen de Camisetas \nEscriba OK para continuar")
}

// Mostrar lista de productos

if(seleccion === "OK"){
    let lista = "";
    for (let i = 0; i < productos.length; i++) {
        lista += productos[i].nombre + "\n";
    }
    

    alert("A continuacion nuestra lista de productos: ")
alert(prod1.nombre+ "\n" + prod2.nombre + "\n" + prod3.nombre + "\n" + prod4.nombre)
}

while(seleccion == "OK"){
    let productoSeleccionado = prompt("Agregue una camiseta a su carrito de compras");
    let precio = 0;
    let nombreProducto = "";

    if(productoSeleccionado == "1" || productoSeleccionado == "2" || productoSeleccionado == "3" || productoSeleccionado == "4") {
        switch(productoSeleccionado) {
            case "1":
                nombreProducto = prod1.nombre;
                precio = 60000;
                break;
            case "2":
                nombreProducto = prod2.nombre;
                precio = 50000;
                break;
            case "3":
                nombreProducto = prod3.nombre;
                precio = 55000;
                break;
            case "4":
                nombreProducto = prod4.nombre;
                precio = 50000;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("Cuantas camisetas desea llevar?"))
        carrito.push({ producto: nombreProducto, unidades, precio })
        console.log(carrito)
    } else {
        alert("El producto ingresado no existe. Por favor, escriba el nombre tal como aparece en la lista.")
    }

    let seleccion = prompt("Desea seguir comprando? \nEscriba OK para continuar comprando \nEscriba NO para finalizar su compra")

if (seleccion === "NO") {
        alert("Gracias por su compra! Vuelva pronto!")

let totalCompra = 0;
        let mensajeCarrito = "Resumen de compra:\n\n";

        for (let i = 0; i < carrito.length; i++) {
            let item = carrito[i];
            let subtotal = item.unidades * item.precio;
            totalCompra += subtotal;
            mensajeCarrito += item.producto + " - " + item.unidades + " unidades - Total: $" + subtotal + "\n";
        }

        mensajeCarrito += "\nTOTAL GENERAL: $" + totalCompra;

        alert(mensajeCarrito);
        console.log("Resumen del carrito:");
        console.log(mensajeCarrito);

        break;


    }
}