const mult = require("./multiplicacion");

test("10 * 20 should be 200", () => {
  // sujeto de prueba
  const result = mult(10, 20);
  // test
  expect(result).toBe(200);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = mult("10", "20");
  expect(result).toBe(err);
});

test("0 * 0 should be 0", () => {
  // sujeto de prueba
  const result = mult(0, 0);
  // test
  expect(result).toBe(0);
});

test("5 * -5 should be -25", () => {
  // sujeto de prueba
  const result = mult(5, -5);
  // test
  expect(result).toBe(-25);
});


