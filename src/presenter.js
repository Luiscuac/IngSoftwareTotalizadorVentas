import Totalizador from "./Totalizador.js";

const form = document.getElementById("venta-form");
const cantidadInput = document.getElementById("cantidad");
const precioInput = document.getElementById("precio");
const estadoInput = document.getElementById("estado"); 
const div = document.getElementById("resultado-div");
const categoriaInput = document.getElementById("categoria");
const pesoInput = document.getElementById("peso");
const clienteInput = document.getElementById("cliente");


const accionesCompraDiv = document.getElementById("acciones-compra");
const btnConfirmar = document.getElementById("btn-confirmar");
const btnCancelar = document.getElementById("btn-cancelar");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const totalizador = new Totalizador();
  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoInput.value.toUpperCase();
  const categoria = categoriaInput.value;
  const cliente = clienteInput.value;
  const peso = Number.parseFloat(pesoInput.value) || 0;

  const neto = totalizador.calcularNeto(cantidad, precio);

  const descuento = totalizador.calcularDescuento(neto);
  const descuentoCategoriaPorcentaje = totalizador.obtenerDescuentoPorCategoria(categoria);
  const descuentoCategoriaMonto = neto * descuentoCategoriaPorcentaje;

  const descuentoFijoMonto = totalizador.obtenerDescuentoFijo(cliente, categoria, neto);
  const precioConDescuentos = neto - descuento - descuentoCategoriaMonto - descuentoFijoMonto;

  const impuesto = totalizador.calcularImpuesto(precioConDescuentos, estado);
  const impuestoCategoriaPorcentaje = totalizador.obtenerImpuestoPorCategoria(categoria);
  const impuestoCategoriaMonto = precioConDescuentos * impuestoCategoriaPorcentaje;
  
  const costoEnvioUnitario = totalizador.obtenerCostoEnvioUnitario(peso);
  const costoEnvioTotalBase = totalizador.calcularCostoEnvioTotal(cantidad, costoEnvioUnitario);

  const descuentoEnvioPorcentaje = totalizador.obtenerDescuentoEnvioPorCliente(cliente);
  const descuentoEnvioMonto = costoEnvioTotalBase * descuentoEnvioPorcentaje;
  const costoEnvioFinal = costoEnvioTotalBase - descuentoEnvioMonto;



div.innerHTML = `
    <p>Precio neto: $${neto.toFixed(2)}</p>
    <p>Descuento general: -$${descuento.toFixed(2)}</p>
    <p>Descuento adicional (${categoria}): -$${descuentoCategoriaMonto.toFixed(2)}</p>
    <p>Descuento fijo especial (${cliente}): -$${descuentoFijoMonto.toFixed(2)}</p>
    <p>Impuesto (${estado}): $${impuesto.toFixed(2)}</p>
    <p>Impuesto adicional (${categoria}): $${impuestoCategoriaMonto.toFixed(2)}</p>
    <p>Costo de envío base (${peso} vol/u): $${costoEnvioTotalBase.toFixed(2)}</p>
    <p>Descuento de envío (${cliente}): -$${descuentoEnvioMonto.toFixed(2)}</p>
    <h3>Total: $${(precioConDescuentos + impuesto + impuestoCategoriaMonto + costoEnvioFinal).toFixed(2)}</h3>
  `;

  accionesCompraDiv.style.display = "block";

});

btnConfirmar.addEventListener("click", () => {
  alert("¡Compra confirmada con éxito!");
  limpiarPantalla();
});

btnCancelar.addEventListener("click", () => {
  alert("Compra cancelada.");
  limpiarPantalla();
});

function limpiarPantalla() {
  form.reset(); 
  div.innerHTML = ""; 
  accionesCompraDiv.style.display = "none";
}