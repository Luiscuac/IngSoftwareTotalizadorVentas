class Totalizador {
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }
    calcularImpuesto(neto, estado) {
        
        const tasasImpuesto = {
            "UT": 0.0665,
            "NV": 0.08,
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
        if(neto >= 3000) {
            return Number((neto * 0.05).toFixed(2));
        }
        if(neto >= 1000) {
            return Number((neto * 0.03).toFixed(2));
        }

        return 0; 
    }

    obtenerDescuentoPorCategoria(categoria) {
        if (categoria === "Alimentos") return 0.02;
        if (categoria === "Material de escritorio") return 0.015;
        if (categoria === "Electronicos") return 0.01;
        return 0; 
    }

obtenerImpuestoPorCategoria(categoria) {
        if (categoria === "Bebidas alcoholicas") return 0.07;
        if (categoria === "Muebles") return 0.03;
        if (categoria === "Electronicos") return 0.04;
        if (categoria === "Vestimenta") return 0.02;
        return 0; 
    }

    obtenerCostoEnvioUnitario(peso) {
        if (peso <= 10) return 0;
        if (peso <= 20) return 3.5;
        if (peso <= 40) return 5;
        if(peso <= 80) return 6;
        if(peso <= 100) return 6.5;
        if(peso <= 200) return 8;
        return 9;
    }

    calcularCostoEnvioTotal(cantidad, costoUnitario) {
        return cantidad * costoUnitario;
    }

    obtenerDescuentoEnvioPorCliente(tipoCliente) {
        if (tipoCliente === "Normal") return 0;
        if (tipoCliente === "Recurrente") return 0.005;
        if (tipoCliente === "Antiguo Recurrente") return 0.01;
        if (tipoCliente === "Especial") return 0.015;

    }

    obtenerDescuentoFijo(tipoCliente, categoria, neto) {
        if (tipoCliente === "Recurrente" && categoria === "Alimentos" && neto > 3000) {
            return 100;
        }
        if (tipoCliente === "Especial" && categoria === "Electronicos" && neto > 7000) {
            return 200;
        }
        return 0;
        
    }
}


export default Totalizador;