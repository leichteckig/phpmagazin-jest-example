const product = require('./product');

test('multiplies 6 * 7 to equal 42', () => {
    expect(product(6, 7)).toBe(42);
});