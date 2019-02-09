const { numberToText } = require('./numberToText');

test('should output numbers as words.', () => {
  const number1 = 725;
  expect(numberToText(number1)).toBe('seven hundred and twenty five');
  const number2 = 498198219845;
  expect(numberToText(number2)).toBe(
    'four hundred ninety eight billion, one hundred ninety eight million, two hundred nineteen thousand, eight hundred and forty five'
  );
  const number3 = 400450054;
  expect(numberToText(number3)).toBe(
    'four hundred million, four hundred fifty thousand and fifty four'
  );
});
