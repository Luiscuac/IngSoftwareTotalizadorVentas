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
        if(neto >= 30000) {
            return Number((neto * 0.15).toFixed(2));
        }
        if(neto >= 10000) {
            return Number((neto * 0.10).toFixed(2));
        }
        if(neto >= 7000) {
            return Number((neto * 0.07).toFixed(2));
        }
        if(neto >= 1500) {
            return Number((neto * 0.05).toFixed(2));
        }
        if(neto >= 1000) {
            return Number((neto * 0.03).toFixed(2));
        }

        return 0; 
    }
}


export default Totalizador;