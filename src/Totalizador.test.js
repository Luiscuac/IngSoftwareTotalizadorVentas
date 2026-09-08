

import Totalizador from "./Totalizador.js";

describe("Totalizador de Ventas", () => {
    
    it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularNeto(20, 3)).toEqual(60);
    });

    it("deberia retornar 0 de impuesto si el estado no tiene regla", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuesto(60, "AA")).toEqual(0);
    });

    it("deberia calcular 6.25% de impuesto para el estado TX", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuesto(60, "TX")).toEqual(3.75); 
    });

    it("deberia calcular 8.25% de impuesto para el estado CA", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuesto(100, "CA")).toEqual(8.25);
    });
    it("deberia calcular 8% de impuesto para el estado NY", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuesto(100, "NY")).toEqual(8);
    });
    
    it("deberua calcular 4% de impuesto para el estado AL", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuesto(100, "AL")).toEqual(4);
    });
    it("deberia calcular 6.65% de impuesto para el estado UT", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuesto(100, "UT")).toEqual(6.65);
    });
    //calcualr descuentos
    it("deberia calcular 0 de descuento para un precio neto menor a 1000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(999)).toEqual(0);
    });
});