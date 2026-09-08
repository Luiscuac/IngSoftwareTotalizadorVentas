import Totalizador from "./Totalizador.js";

const form = document.getElementById("venta-form");
const cantidadInput = document.getElementById("cantidad");
const precioInput = document.getElementById("precio");
const estadoInput = document.getElementById("estado"); 
const div = document.getElementById("resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const totalizador = new Totalizador();
  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoInput.value.toUpperCase();
  
  const neto = totalizador.calcularNeto(cantidad, precio);
  const descuento = totalizador.calcularDescuento(neto);
  const impuesto = totalizador.calcularImpuesto(neto, estado);
  
  div.innerHTML = `
    <p>Precio neto: $${neto}</p>
    <p>Descuento: $${descuento}</p>
    <p>Impuesto (${estado}): $${impuesto}</p>
    <h3>Total: $${(neto - descuento) + impuesto}</h3>
  `;
});