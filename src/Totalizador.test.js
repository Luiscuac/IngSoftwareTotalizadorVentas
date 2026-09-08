

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

});