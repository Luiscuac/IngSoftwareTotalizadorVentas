class Totalizador {
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }
    calcularImpuesto(neto, estado) {
        
        if (estado === "TX") return neto * 0.0625;
        if (estado === "CA") return neto * 0.0825;
        if (estado === "NY") return neto * 0.08;
        if (estado === "AL") return neto * 0.04;
        
        return 0;
    }
}


export default Totalizador;