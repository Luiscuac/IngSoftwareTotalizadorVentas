class Totalizador {
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }
    calcularImpuesto(neto, estado) {
        
        const tasasImpuesto = {
            "UT": 0.0665,
            "NY": 0.08,
            "TX": 0.0625,
            "AL": 0.04,
            "CA": 0.0825
        };
        
        const tasa = tasasImpuesto[estado] || 0;
        return Number((neto * tasa).toFixed(2));
    }

    calcularDescuento(neto) {
        return 0; 
    }
}


export default Totalizador;