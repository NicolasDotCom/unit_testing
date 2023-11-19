const divi = require("./division");

test("20 / 2 should be 10", () => {
    // sujeto de prueba
    const result = divi(20, 2);
    // test
    expect(result).toBe(10);
});

test("si los datos no son enteros me debe retornar un error", () => {
    const err = "datos invalidos";
    const result = divi("20", "2");
    expect(result).toBe(err);
});

test("0 / 5 should be 0", () => {
    // sujeto de prueba
    const result = divi(0, 5);
    // test
    expect(result).toBe(0);
});

test("10 / 3 should be approximately 3.333", () => {
    // sujeto de prueba
    const result = divi(10, 3);
    // test
    expect(result).toBeCloseTo(3.333);
});
