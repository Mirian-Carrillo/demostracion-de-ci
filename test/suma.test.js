const suma = require('../src/suma');
test('suma 2 + 3 = 5',() => {
    expect(suma(2,3)).toBe(5);
});

test('suma -1 + 1 = 0',() => {
    expect(suma(-1, 1)).toBe(0);
});