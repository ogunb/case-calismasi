const { textToNumber } = require('./textToNumber');

test('should output words as number.', () => {
  const number1 = 'seven hundred and twenty five';
  expect(textToNumber(number1)).toBe(725);
  const number2 =
    'four hundred ninety eight billion, one hundred ninety eight million, two hundred nineteen thousand, eight hundred and forty five';
  expect(textToNumber(number2)).toBe(498198219845);
});
