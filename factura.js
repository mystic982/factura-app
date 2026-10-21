document.getElementById("formularioFactura").addEventListener("submit", agregarFila);

let subtotalAcumulado = 0;
const PORCENTAJE_IVA = 0.15; 

function agregarFila(event) {
    event.preventDefault();

    // Capturar los valores de los inputs
    let nombre = document.getElementById("nombrecliente").value;
    let cedula = document.getElementById("cedulacliente").value;
    let sexo = document.getElementById("sexocliente").value || "N/A";
    let producto = document.getElementById("productos").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("elprecio").value);

    // Calcular el subtotal del producto
    let subtotalProducto = cantidad * precio;

    // Crear la nueva fila en la tabla
    const filaNueva = document.createElement("tr");
    filaNueva.insertCell().textContent = producto;
    filaNueva.insertCell().textContent = cantidad;
    filaNueva.insertCell().textContent = precio.toFixed(2);
    filaNueva.insertCell().textContent = subtotalProducto.toFixed(2);

    // Colocar la fila en el cuerpo de la tabla
    document.getElementById("listaProductos").appendChild(filaNueva);

    // Mostrar los datos del cliente
    document.getElementById("datosClienteFactura").textContent =
        "Cliente: " + nombre + " | Cédula: " + cedula + " | Sexo: " + sexo;

    // Acumular subtotal general
    subtotalAcumulado += subtotalProducto;

    // Cálculos de IVA y Total Final
    let montoIva = subtotalAcumulado * PORCENTAJE_IVA;
    let totalGeneral = subtotalAcumulado + montoIva;

    // Actualizar valores en pantalla
    document.getElementById("totalFactura").textContent = subtotalAcumulado.toFixed(2);
    document.getElementById("resumenSubtotal").textContent = subtotalAcumulado.toFixed(2);
    document.getElementById("resumenIva").textContent = montoIva.toFixed(2);
    document.getElementById("resumenTotal").textContent = totalGeneral.toFixed(2);

    // Limpiar únicamente los campos del producto
    document.getElementById("productos").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("elprecio").value = "";
    
    // Opcional: enfocar de nuevo el input de producto
    document.getElementById("productos").focus();
}