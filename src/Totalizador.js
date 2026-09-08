class Totalizador {
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }
    calcularImpuesto(neto, estado) {
        if (estado === "TX") return neto * 0.0625;
        return 0;
    }
}


export default Totalizador;