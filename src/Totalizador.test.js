

import Totalizador from "./Totalizador.js";

describe("Totalizador de Ventas", () => {
    
    it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularNeto(20, 3)).toEqual(60);
    });

    

});