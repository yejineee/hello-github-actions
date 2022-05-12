const {sum} = require('./sum.js');

test('sum test', () => {
  expect(sum(1, 2)).toBe(3)
});
test('sum test', () => {
  expect(sum(1, 1)).toBe(2)
});