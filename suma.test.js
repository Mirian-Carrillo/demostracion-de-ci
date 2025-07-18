const suma = require('/suma');
test('Suma 2 + 3 = 5',() => {
    expect(suma(2,3)).toBe(5);
});

test('Suma -1 +1 = 0',() => {
    expect(suma(-1, 1)).toBe(0);
});