import Totalizador from "./Totalizador.js";

const form = document.getElementById("venta-form");
const cantidadInput = document.getElementById("cantidad");
const precioInput = document.getElementById("precio");
const estadoInput = document.getElementById("estado"); 
const div = document.getElementById("resultado-div");
const categoriaInput = document.getElementById("categoria");
const pesoInput = document.getElementById("peso");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const totalizador = new Totalizador();
  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoInput.value.toUpperCase();
  const categoria = categoriaInput.value;

  const neto = totalizador.calcularNeto(cantidad, precio);

  const descuento = totalizador.calcularDescuento(neto);
  const descuentoCategoriaPorcentaje = totalizador.obtenerDescuentoPorCategoria(categoria);
  const descuentoCategoriaMonto = neto * descuentoCategoriaPorcentaje;
  const precioConDescuentos = neto - descuento - descuentoCategoriaMonto;

  const impuesto = totalizador.calcularImpuesto(precioConDescuentos, estado);
  const impuestoCategoriaPorcentaje = totalizador.obtenerImpuestoPorCategoria(categoria);
  const impuestoCategoriaMonto = precioConDescuentos * impuestoCategoriaPorcentaje;
  
  const peso = Number.parseFloat(pesoInput.value) || 0; 
  const costoEnvioUnitario = totalizador.obtenerCostoEnvioUnitario(peso);
  const costoEnvioTotal = totalizador.calcularCostoEnvioTotal(cantidad, costoEnvioUnitario);


  div.innerHTML = `
    <p>Precio neto: $${neto}</p>
    <p>Descuento general: $${descuento}</p>
    <p>Descuento adicional (${categoria}): $${descuentoCategoriaMonto}</p>
    <p>Impuesto (${estado}): $${impuesto}</p>
    <p>Impuesto adicional (${categoria}): $${impuestoCategoriaMonto}</p>
    <p>Costo de envío (${peso} vol/u): $${costoEnvioTotal}</p>
    <h3>Total: $${(precioConDescuentos + impuesto + impuestoCategoriaMonto + costoEnvioTotal).toFixed(2)}</h3>
`;
});