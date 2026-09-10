

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
    it("deberia calcular 8% de impuesto para el estado NV", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuesto(100, "NV")).toEqual(8);
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
    it("deberia calcular 3% de descuento para un precio neto igual o mayor a 1000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(1000)).toEqual(30);
    });
    it("deberia calcular 5% de descuento para un precio neto igual o mayor a 3000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(3000)).toEqual(150);
    });
    it("deberia calcular 7% de descuento para un precio neto mayor o igual a 7000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(7001)).toEqual(490.07);
    });

    it("deberia calcular 10% de descuento para un precio neto mayor o igual a 10000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(10000)).toEqual(1000);
    });
    it("deberia calcular 15% de descuento para un precio neto mayor o igual a 30000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(30000)).toEqual(4500);
    });

    //categorias

    it("deberia calcular 0% de descuento adicional para categoria Varios", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuentoPorCategoria("Varios")).toEqual(0);
    });

    it("deberia calcular 2% de descuento adicional para categoria Alimentos", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuentoPorCategoria("Alimentos")).toEqual(0.02);
    });

    it("deberia calcular 1.5% de descuento adicional para categoria Material de escritorio", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuentoPorCategoria("Material de escritorio")).toEqual(0.015);
    });

    it("deberia calcular 1% de descuento adicional para categoria Electronicos", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuentoPorCategoria("Electronicos")).toEqual(0.01);
    });

    it("deberia calcular 0% de impuesto adicional para categoria Varios", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerImpuestoPorCategoria("Varios")).toEqual(0);
    });

    it("deberia calcular 7% de impuesto adicional para categoria Bebidas alcoholicas", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerImpuestoPorCategoria("Bebidas alcoholicas")).toEqual(0.07);
    });

    it("deberia calcular 3% de impuesto adicional para categoria Muebles", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerImpuestoPorCategoria("Muebles")).toEqual(0.03);
    });

    it("deberia calcular 4% de impuesto adicional para categoria Electronicos", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerImpuestoPorCategoria("Electronicos")).toEqual(0.04);
    });

    it("deberia calcular 2% de impuesto adicional para categoria Vestimenta", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerImpuestoPorCategoria("Vestimenta")).toEqual(0.02);
    });

    //calcular costo de envio unitario
    it("deberia calcular costo de envio unitario de $0 para peso entre 0 y 10", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerCostoEnvioUnitario(10)).toEqual(0);
    });
});