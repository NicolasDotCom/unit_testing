const res = require("./resta");

test("20 - 10 should be 10", () => {
    // sujeto de prueba
    const result = res(20, 10);
    // test
    expect(result).toBe(10);
});

test("si los datos no son enteros me debe retornar un error", () => {
    const err = "datos invalidos";
    const result = res("20", "10");
    expect(result).toBe(err);
});

test("5 - 7 should be -2", () => {
    // sujeto de prueba
    const result = res(5, 7);
    // test
    expect(result).toBe(-2);
});

test("0 - 0 should be 0", () => {
    // sujeto de prueba
    const result = res(0, 0);
    // test
    expect(result).toBe(0);
});

