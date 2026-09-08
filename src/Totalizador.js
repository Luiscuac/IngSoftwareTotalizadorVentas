class Totalizador {
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }
    calcularImpuesto(neto, estado) {
        
        if (estado === "TX") return neto * 0.0625;
        if (estado === "CA") return neto * 0.0825;
        return 0;
    }
}


export default Totalizador;