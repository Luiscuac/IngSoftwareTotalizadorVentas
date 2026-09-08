import Totalizador from "./Totalizador.js";

const form = document.getElementById("venta-form");
const cantidadInput = document.getElementById("cantidad");
const precioInput = document.getElementById("precio");
const div = document.getElementById("resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const totalizador = new Totalizador();
  const neto = totalizador.calcularNeto(cantidadInput.value, precioInput.value);
  div.innerHTML = `<p>Precio neto: $${neto}</p>`;
});